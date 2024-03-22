'use client'

import { server } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast, Toaster } from 'sonner'
import { SubmitButton } from './login-button'
import { LoginGoogleButton } from './login-google-button'
import { LoginInputs } from './login-inputs'

const validateInputFormSchema = z.object({
  email: z
    .string()
    .min(1, 'digite um endereço de e-mail válido.')
    .email('formato de e-mail inválido.'),
  password: z
    .string()
    .min(1, 'o campo de senha é obrigatório.')
    .min(6, 'a senha precisa de no mínimo 6 caracteres.'),
})

export type ValidateInputForm = z.infer<typeof validateInputFormSchema>

export function Form() {
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors = {} },
  } = useForm<ValidateInputForm>({
    resolver: zodResolver(validateInputFormSchema),
  })

  async function loginData() {
    setLoadingSubmit(true)

    const formData = {
      email: watch('email'),
      password: watch('password'),
    }

    server
      .post('/api/v1/login', formData)
      .then((response) => {
        console.log(response.data)
        toast.success('Login efetuado com sucesso!')
      })
      .catch((error) => {
        setLoadingSubmit(false)
        console.error(error)
        toast.error('Erro ao realizar login, tente novamente!')
      })
      .finally(() => setLoadingSubmit(false))
  }

  return (
    <>
      <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
        <div className="flex flex-col space-y-2 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Fazer login na sua conta
          </h2>
          <p className="text-base md:text-xl">
            Entre na sua conta para acessar o painel
          </p>
        </div>
        <form
          onSubmit={handleSubmit(loginData)}
          className="flex flex-col max-w-md space-y-5"
        >
          <LoginInputs register={register} errors={errors} />
          <Toaster richColors position="bottom-right" />
          <div className="pt-0 sm:pt-2">
            <SubmitButton loading={loadingSubmit} />
          </div>

          <div className="flex justify-center items-center">
            <span className="w-full border border-black"></span>
            <span className="px-4">Ou</span>
            <span className="w-full border border-black"></span>
          </div>
          <LoginGoogleButton loading={loadingGoogle} />
        </form>
      </div>
    </>
  )
}
