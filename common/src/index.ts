import { z } from "zod";

export const JWTPayloadSchema = z.object({
    id: z.string(),
})

export const signupSchema = z.object({
    username: z.string().min(1, "Username is required").max(30, "Username must be less than 30 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters").max(30, "Password must be less than 30 characters"),
})

export const signinSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters").max(30, "Password must be less than 30 characters"),
})

export const createPostSchema = z.object({
    title: z.string().min(1, "Title is required").max(120, "Title must be less than 120 characters"),
    content: z.string().min(1, "Content is required"),
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

