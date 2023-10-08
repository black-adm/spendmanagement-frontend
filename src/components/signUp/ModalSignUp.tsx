"use client"

import { api } from '@/api'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card"
import { useRouter } from 'next/navigation'
import { Button } from "../ui/button"
import { InputsForm } from "./InputsForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export type CreateInputForm = z.infer<typeof createInputFormSchema>

const createInputFormSchema = z.object({
    email: z.string()
        .nonempty('O campo de e-mail é obrigatório!')
        .email('Formato de e-mail inválido!'),
    passsword: z.string()
        .nonempty('O campo de senha é obrigatório!')
        .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
    passwordConfirmation: z.string()
        .nonempty('Você deve repetir a sua senha!')
})

export function ModalSignUp() {
    const router = useRouter();

    const {
        handleSubmit,
        register,
        watch,
        formState: { errors },
    } = useForm<CreateInputForm>({
        resolver: zodResolver(createInputFormSchema)
    })

    function createData() {
        const formData = {
            email: watch('email'),
            passsword: watch('passsword'),
            passwordConfirmation: watch('passwordConfirmation')
        };

        api.post("api/v1/signUp", formData)
            .then((response) => {
                console.log("Sucesso:", response.data);
            })
            .catch((error) => {
                console.error("Erro ao cadastrar:", error);
            });
    };

    return (
        <>
            <Card>
                <form onSubmit={handleSubmit(createData)}>
                    <CardHeader className="space-y-1">
                        <CardTitle className="flex justify-between items-center text-2xl">
                            Cadastrar uma nova conta
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="p-[2px] hover:bg-primary-gray rounded-full focus:bg-primary-gray"
                            >
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </button>
                        </CardTitle>
                        <CardDescription>
                            Se preferir, faça login com o Google.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid grid-cols-1 gap-6">
                            <Button variant="outline" className="w-full">
                                <svg viewBox="0 0 128 128" className="mr-2 h-4 w-4"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"></path></svg>
                                Google
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Ou criar com
                                </span>
                            </div>
                        </div>
                        <InputsForm
                            register={register}
                            errors={errors}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            className="w-full bg-black text-medium-orange hover:bg-light-orange hover:text-black focus:bg-light-orange focus:text-black"
                        >
                            Criar sua conta
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    )
}