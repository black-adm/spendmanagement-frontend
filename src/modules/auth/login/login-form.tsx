'use client'

import { server } from '@/lib/axios'
import { errorMessageProps } from '@/types/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { CircleCheckBig, TriangleAlert } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { SubmitButton } from './login-button'
import { LoginGoogleButton } from './login-google-button'
import { LoginInputs } from './login-inputs'

interface DataProps {
  email: string
  password: string
}

export type ValidateInputForm = z.infer<typeof validateInputFormSchema>

const validateInputFormSchema = z.object({
  email: z
    .string()
    .nonempty('O campo de e-mail é obrigatório!')
    .email('Formato de e-mail inválido!'),
  password: z
    .string()
    .nonempty('O campo de senha é obrigatório!')
    .min(6, 'A senha precisa de no mínimo 6 caracteres.'),
})

export function Form() {
  const [loading, setLoading] = useState(false)
  const [sucess, setSucess] = useState('')
  const [error, setError] = useState<errorMessageProps>()

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<ValidateInputForm>({
    resolver: zodResolver(validateInputFormSchema),
  })

  async function loginData(data: DataProps) {
    setLoading(true)

    const formData = {
      email: watch('email'),
      password: watch('password'),
    }

    server
      .post('/api/v1/login', formData)
      .then((response) => {
        setSucess(response.data)
      })
      .catch((error) => {
        setError(error)
        console.error(error)
      })
      .finally(() => setLoading(false))
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
          {sucess && (
            <div className="flex flex-col pt-2 pl-3">
              <p className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-green">
                Login realizado
                <CircleCheckBig className="size-4" />
              </p>
            </div>
          )}

          {error && (
            <div className="flex flex-col pt-2 pl-3">
              <p className="flex items-center gap-x-[2px] text-xs font-medium tracking-tight text-primary-red">
                <TriangleAlert className="size-4" />
                {error.message}
              </p>
            </div>
          )}

          <div className="pt-0 sm:pt-2">
            <SubmitButton loading={loading} />
          </div>

          <div className="flex justify-center items-center">
            <span className="w-full border border-black"></span>
            <span className="px-4">Ou</span>
            <span className="w-full border border-black"></span>
          </div>

          <LoginGoogleButton loading={loading} />
        </form>
      </div>
    </>
  )
}
