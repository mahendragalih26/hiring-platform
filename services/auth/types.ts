import { z } from "zod"

export const schemaLoginRequest = z.object({
  email: z.string(),
  password: z.string(),
  purpose: z.enum(["landing", "backoffice"]),
})

export type TLoginRequest = z.infer<typeof schemaLoginRequest>

export const schemaLoginResponse = z.object({
  token: z.string(),
})

export type TLoginResponse = z.infer<typeof schemaLoginResponse>
