import { z } from "zod";

export const forgotPasswordFormSchema = z
  .object({
    email: z.string().email("Ocorreu um erro! Email informado não cadastrado."),
  })