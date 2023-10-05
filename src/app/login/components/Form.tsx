'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Inputs } from "./Inputs";
import { GoogleButton } from "./GoogleButton";

import api from "@/api";

type ValidateInputForm = z.infer<typeof validateInputFormSchema>

const validateInputFormSchema = z.object({
    email: z.string()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
})

export function Form() {
    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ValidateInputForm>({
        resolver: zodResolver(validateInputFormSchema)
    })

    function loginData() {
        const formData = {
            email: watch('email'),
            password: watch('password'),
        };

        api.post("api/v1/login", formData)
            .then((response) => {
                console.log("Resposta do login:", response.data);
            })
            .catch((error) => {
                console.error("Erro no login:", error);
            });
    };

    return (
        <>
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold">Fazer login na sua conta</h2>
                    <p className="text-base md:text-xl">Entre na sua conta para acessar o painel</p>
                </div>
                <form
                    onSubmit={handleSubmit(loginData)}
                    className="flex flex-col max-w-md space-y-5"
                >
                    <Inputs
                        register={register}
                        errors={errors}
                    />

                    <div className="pt-0 sm:pt-2">
                        <button
                            type="submit"
                            className="flex items-center gap-x-2 justify-center w-full px-3 py-2 md:px-4 md:py-3.5 rounded-lg font-medium bg-black text-white hover:bg-primary-black focus:bg-primary-black transition-colors"
                        >
                            Acessar
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" x2="3" y1="12" y2="12" /></svg>
                        </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="w-full border border-black"></span>
                        <span className="px-4">Ou</span>
                        <span className="w-full border border-black"></span>
                    </div>

                    <GoogleButton />
                </form>
            </div>
        </>
    )
}