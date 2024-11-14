import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string({ required_error: 'email is required' }).email({ message: 'invalid email address' }),
  password: z.string({ required_error: 'password is required' })
})

export type TypeLoginInput = z.infer<typeof loginSchema>