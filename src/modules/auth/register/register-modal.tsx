'use client'

import { AlertDialogTrigger } from '@/components/ui/alert-dialog'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { server } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { useRouter } from 'next/navigation'
import { RegisterButton } from './register-button'
import { RegisterForm } from './register-form'
import { RegisterGoogleButton } from './register-google-button'

const createInputFormSchema = z.object({
  email: z
    .string()
    .min(1, 'digite um endereço de e-mail válido.')
    .email('formato de e-mail inválido.'),
  password: z
    .string()
    .min(1, 'o campo de senha é obrigatório.')
    .min(6, 'a senha precisa de no mínimo 6 caracteres.'),
  passwordConfirmation: z
    .string()
    .min(1, 'você deve repetir a sua senha.')
    .min(6, 'a confirmação da senha precisa de 6 caracteres.'),
})

export type CreateInputForm = z.infer<typeof createInputFormSchema>

export function RegisterModal() {
  const router = useRouter()
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [loadingGoogle] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<CreateInputForm>({
    resolver: zodResolver(createInputFormSchema),
  })

  function registerData() {
    setLoadingSubmit(true)
    const formData = {
      email: watch('email'),
      password: watch('password'),
      passwordConfirmation: watch('passwordConfirmation'),
    }

    const loginData = {
      email: formData.email,
      password: formData.password,
    }

    server
      .post('/api/v1/signUp', formData)
      .then(() => {
        setLoadingSubmit(false)
        toast.success('Usuário cadastrado com sucesso!')
        server.post('/api/v1/login', loginData).then((response) => {
          const token = response.data.accessToken
          localStorage.setItem('accessToken', token)
          router.push('/dashboard')
        })
      })
      .catch((error) => {
        setLoadingSubmit(false)
        toast.error('Erro no cadastro, tente novamente!')
        console.error(error)
      })
  }

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit(registerData)}>
          <CardHeader className="space-y-1">
            <CardTitle className="flex justify-between items-center text-2xl">
              Cadastrar uma nova conta
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  className="p-[2px] hover:bg-primary-gray rounded-full focus:bg-primary-gray"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </AlertDialogTrigger>
            </CardTitle>

            <CardDescription>
              Se preferir, faça o cadastro com sua conta Google.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="grid grid-cols-1 gap-6">
              <RegisterGoogleButton loading={loadingGoogle} />
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
            <RegisterForm register={register} errors={errors} />
          </CardContent>
          <CardFooter>
            <RegisterButton loading={loadingSubmit} />
          </CardFooter>
        </form>
      </Card>
    </>
  )
}
