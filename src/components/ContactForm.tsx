"use client"

import { Input } from "./ui/input";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import api from "@/api";

export type ValidateInput = z.infer<typeof validateInputSchema>

const validateInputSchema = z.object({
    email: z.string()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
})

export function ContactForm() {
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ValidateInput>({
        resolver: zodResolver(validateInputSchema)
    })

    function sendMail() {
        const inputData = {
            email: watch('email'),
        };

        api.post("api/v1/Email", inputData)
            .then((response) => {
                console.log("Sucesso :", response.data);
            })
            .catch((error) => {
                console.error("Erro no login:", error);
            });
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(sendMail)}
                className="sm:col-span-2 px-4 sm:px-0"
            >
                <h1 className="max-w-lg text-base sm:text-xl font-semibold tracking-tight text-primary-black xl:text-2xl">
                    Dúvidas ? Contate nosso time de suporte
                </h1>

                <div className="flex flex-col mx-auto mt-6 space-y-6 md:space-y-0 md:flex-row">
                    <Input
                        id="email"
                        type="text"
                        className="px-4 py-2 text-primary-black bg-white border rounded-md focus:border-medium-orange focus:outline-none"
                        placeholder="Informe seu e-mail"
                        {...register('email')}
                    />

                    {errors.email &&
                        <span className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                            {errors.email.message}
                        </span>
                    }

                    <button
                        type="submit"
                        className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-primary-orange transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-black rounded-md hover:bg-primary-black"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}