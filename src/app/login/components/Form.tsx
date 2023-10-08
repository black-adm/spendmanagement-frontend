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
                console.log("Sucesso:", response.data);
            })
            .catch((error) => {
                console.error("Erro no login:", error);
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

                    <GoogleButton />
                </form >
            </div >
        </>
    )
}