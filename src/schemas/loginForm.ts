import { z } from "zod";

export type LoginFormSchema = z.infer<typeof loginFormSchema>;

export const loginFormSchema = z
  .object({
    username: z.string().email("O Email informado é inválido."),
    password: z.string().min(6, "A senha deve possuir no minímo 6 caracteres."),
  })