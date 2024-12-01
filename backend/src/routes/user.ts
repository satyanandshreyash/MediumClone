import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinSchema, signupSchema } from "@satyanand_shreyash/medium-common";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const parsedData = signupSchema.safeParse(body);
    if (!parsedData.success) {
        c.status(411)
        return c.json({ message: parsedData.error.issues[0].message })
    }
    try {
        const foundUser = await prisma.user.findUnique({
            where: {
                email: body.email,
            }
        })
        if (foundUser) {
            c.status(400)
            return c.json({ message: "User already exists" })
        }
        const newUser = await prisma.user.create({
            data: {
                username: body.username,
                email: body.email,
                password: body.password
            },
        })
        const token = await sign({ id: newUser.id }, c.env.JWT_SECRET)
        return c.json({
            message: "User created successfully",
            token
        })
    } catch (e) {
        console.error("Error while signing up", e)
        c.status(500);
        return c.json({ message: "Error while signing up" })
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const parsedData = signinSchema.safeParse(body);
    if (!parsedData.success) {
        c.status(411)
        return c.json({ message: parsedData.error.issues[0].message })
    }
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
            },
        })
        if (!user) {
            c.status(400)
            return c.json({ message: "User not found" })
        }

        if (user.password !== body.password) {
            c.status(400)
            return c.json({ message: "Invalid password" })
        } else {
            const token = await sign({ id: user.id }, c.env.JWT_SECRET)
            return c.json({
                token,
            })
        }
    } catch (err) {
        console.error("Error while signing in", err)
        c.status(500)
        return c.json({ message: "Error while signing in" })
    }
})
