import { z } from 'zod'


export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const verifyOtpSchema = z.object({
  userId: z.string(),
  otp: z.string().length(6),
})

export const resendOtpSchema = z.object({
  userId: z.string(),
})

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
})

export const resetPasswordSchema = z.object({
  userId: z.string(),
  otp: z.string().length(6),
  newPassword: z.string().min(8),
})