import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createPostSchema, JWTPayloadSchema, updatePostSchema } from "@satyanand_shreyash/medium-common";
import { Hono } from "hono";
import { verify } from "hono/jwt";

export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
}>();

postRouter.use('/*', async (c, next) => {
    try {
        const header = c.req.header('authorization');
        if (!header) {
            c.status(403)
            return c.json({ message: "Unauthorized: Missing token" })
        }
        const token = header.split(' ')[1];
        if (!token) {
            c.status(403)
            return c.json({ message: "Unauthorized: Invalid token" })
        }
        const response = await verify(token, c.env.JWT_SECRET)
        const parsedPayload = JWTPayloadSchema.safeParse(response);
        if (parsedPayload.success) {
            c.set('userId', parsedPayload.data.id);
            await next()
        } else {
            c.status(403);
            return c.json({ message: "Unauthorized: Invalid token" })
        }
    } catch (err) {
        console.error("Error while verifying token", err)
        c.status(500)
        return c.json({ message: "Error while verifying token" })
    }
})

postRouter.get('/me', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const userId = c.get('userId');
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                username: true,
                email: true,
            }
        })
        if (!user) {
            c.status(404)
            return c.json({ message: "User not found" })
        }
        return c.json({
            message: "User details fetched successfully",
            user,
        })
    } catch (err) {
        console.error("Error while fetching user details", err)
        c.status(500)
        return c.json({ message: "Error while fetching user details" })
    }
})

postRouter.post('/create', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const parsedData = createPostSchema.safeParse(body);
    if (!parsedData.success) {
        c.status(411)
        return c.json({ message: parsedData.error.issues[0].message })
    }
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get('userId'),
            },
        })
        return c.json({
            message: "Post created successfully",
            post,
        })
    } catch (err) {
        console.error("Error while creating post", err)
        c.status(500)
        return c.json({ message: "Error while creating post" })
    }
})

postRouter.put('/update', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const parsedData = updatePostSchema.safeParse(body);
    if (!parsedData.success) {
        c.status(411)
        return c.json({ message: parsedData.error.issues[0].message })
    }
    try {
        const post = await prisma.post.update({
            where: {
                id: body.id,
            },
            data: {
                title: body.title,
                content: body.content,
                authorId: c.get('userId'),
            },
        })
        return c.json({
            message: "Post updated successfully",
            post,
        })
    } catch (err) {
        console.error("Error while updating post", err)
        c.status(500)
        return c.json({ message: "Error while updating post" })
    }

})

postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        username: true
                    }
                }
            }
        })
        return c.json({
            message: "Posts fetched successfully",
            posts,
        })
    } catch (err) {
        console.error("Error while fetching posts", err)
        c.status(500)
        return c.json({ message: "Error while fetching posts" })
    }
})

postRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: c.req.param('id'),
            },
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        username: true
                    }
                }
            }
        })
        return c.json({
            message: "Post fetched successfully",
            post,
        })
    } catch (err) {
        console.error("Error while fetching post", err)
        c.status(500)
        return c.json({ message: "Error while fetching  post" })
    }
})