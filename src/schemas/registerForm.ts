import { z } from "zod";

export type RegisterFormSchema = z.infer<typeof registerFormSchema>

export const registerFormSchema = z
  .object({
    name: z.string().min(5, "O Nome completo informado é muito curto."),
    birthdate: z.string().min(10, "A data de nascimento é inválida."),
    phone: z.string().min(12, "Telefone informado é inválido."),
    gender: z.string().optional(),
    cep: z.string().min(9, "O CEP informado é inválido.").optional(),
    address: z.string().min(6, "Informe um endereço válido.").optional(),
    addressNumber: z.coerce.number().optional(),
    uf: z.string().min(2, "UF informado é inválido.").optional(),
    complement: z.string().optional(),
    username: z.string().email("O Email informado é inválido."),
    password: z.string().min(6, "A senha deve possuir no minímo 6 caracteres."),
    confirmPassword: z.string().min(6, "A confirmação da senha é inválida."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Ocorreu um erro! As senhas informadas devem ser idênticas.",
    path: ["confirmPassword"],
  });

