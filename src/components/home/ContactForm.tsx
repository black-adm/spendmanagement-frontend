"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { mailApi } from "@/api";

export type ValidateInput = z.infer<typeof validateInputSchema>

const validateInputSchema = z.object({
    to: z.string()
        .nonempty('Preencha o campo com o seu e-mail.')
        .email('Formato de e-mail inválido!'),
})

export function ContactForm() {
    const [sucess, setSucess] = useState('')
    const [loading, setLoading] = useState(false)

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<ValidateInput>({
        resolver: zodResolver(validateInputSchema)
    })

    function sendMail() {
        setLoading(true)
        const inputData = {
            to: watch('to'),
        };

        mailApi.post("v1/api/Email/subscribe", inputData)
            .then((response) => {
                setSucess(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.error("Erro no login:", error)
            })
            .finally(() => {
                setLoading(false)
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
                        className="px-4 py-3 text-primary-black bg-white border border-light-gray rounded-md focus:border-black outline-none"
                        placeholder="Informe seu e-mail"
                        {...register('to')}
                    />

                    <Button
                        type="submit"
                        className={`flex items-center w-full px-6 py-2.5 text-sm font-medium tracking-wider text-yellow-orange transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-black rounded-md hover:bg-primary-black ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={loading}
                    >
                        {loading ?
                            <svg aria-hidden="true" role="status" className="inline-flex animate-spin w-4 h-4 text-yellow-orange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            :
                            "Enviar"}
                    </Button>
                </div>

                {sucess && (
                    <div className="flex flex-col pt-2 pl-3">
                        <p className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-green">
                            Email enviado com sucesso
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                        </p>
                    </div>
                )}

                {errors.to &&
                    <div className="flex flex-col pt-2 pl-3">
                        <p className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                            {errors.to.message}
                        </p>
                    </div>
                }
            </form>
        </>
    )
}