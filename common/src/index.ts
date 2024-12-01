import { z } from "zod";

export const JWTPayloadSchema = z.object({
    id: z.string(),
})

export const signupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
})

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const createPostSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export const updatePostSchema = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type SignupSchema = z.infer<typeof signupSchema>
export type SigninSchema = z.infer<typeof signinSchema>
export type CreatePostSchema = z.infer<typeof createPostSchema>
export type UpdatePostSchema = z.infer<typeof updatePostSchema>

