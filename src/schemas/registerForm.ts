import { z } from "zod";

export const personFormSchema = z
  .object({
    name: z.string().min(5, "O Nome é um campo obrigatório."),
    birthdate: z.string().min(10, "Informe uma data de nascimento correta.").optional(),
    phone: z.string().min(12, "Telefone informado é inválido.").optional(),
    gender: z.string().optional(),
  })

export const addressFormSchema = z
  .object({
    cep: z.string().min(9, "O CEP informado é inválido.").optional(),
    address: z.string().min(6, "Informe um endereço válido.").optional(),
    addressNumber: z.number().optional(),
    uf: z.string().min(2, "O campo UF informado não é válido.").optional(),
  })

export const accountFormSchema = z
  .object({
    email: z.string().email("O Email informado é inválido."),
    password: z.string().min(6, "A senha deve possuir no minímo 6 caracteres."),
    confirmPassword: z.string().min(6, "A confirmação da senha é inválida."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Ocorreu um erro! As senhas informadas devem ser idênticas.",
    path: ["confirmPassword"],
  });

