import { z } from "zod";

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;

export const forgotPasswordFormSchema = z
  .object({
    username: z.string().email("O Email informado é inválido."),
  })