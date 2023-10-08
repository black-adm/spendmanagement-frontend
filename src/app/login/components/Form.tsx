'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Inputs } from "./Inputs";
import { GoogleButton } from "./GoogleButton";

import { api } from "@/api";
import { SubmitButton } from "./SubmitButton"

export type ValidateInputForm = z.infer<typeof validateInputFormSchema>

const validateInputFormSchema = z.object({
    email: z.string()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    password: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
})

export function Form() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ValidateInputForm>({
        resolver: zodResolver(validateInputFormSchema)
    })

    function loginData() {
        setLoading(true)
        const formData = {
            email: watch('email'),
            password: watch('password'),
        };

        api.post("api/v1/login", formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                setError(error);
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
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

                    {error && (
                        <div className="flex flex-col pt-2 pl-3">
                            <p className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 lucide lucide-alert-triangle"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                {error.message}
                            </p>
                        </div>
                    )}

                    <div className="pt-0 sm:pt-2">
                        <SubmitButton
                            loading={loading}
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <span className="w-full border border-black"></span>
                        <span className="px-4">Ou</span>
                        <span className="w-full border border-black"></span>
                    </div>

                    <GoogleButton
                        loading={loading}
                    />
                </form >
            </div >
        </>
    )
}