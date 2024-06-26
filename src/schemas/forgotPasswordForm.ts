import { z } from "zod";

export const forgotPasswordFormSchema = z
  .object({
    username: z.string().email("O Email informado é inválido."),
  })