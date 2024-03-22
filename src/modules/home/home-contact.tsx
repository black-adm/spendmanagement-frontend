'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mail } from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'

import { Loader } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

const validateInputSchema = z.object({
  to: z
    .string()
    .min(1, 'Preencha o campo com o seu e-mail.')
    .email('Formato de e-mail inválido!'),
})

export type ValidateInput = z.infer<typeof validateInputSchema>

export function HomeContact() {
  const [loading, setLoading] = useState(false)

  const { handleSubmit, register, watch } = useForm<ValidateInput>({
    resolver: zodResolver(validateInputSchema),
  })

  function sendMail() {
    setLoading(true)
    const inputData = { to: watch('to') }

    mail
      .post('v1/api/Email/subscribe', inputData)
      .then((response) => {
        console.log(response.data)
        toast.success('Email enviado!')
      })
      .catch((error) => {
        setLoading(false)
        console.error(error)
        toast.error('Erro ao enviar email!')
      })
      .finally(() => setLoading(false))
  }

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
            className={`flex items-center w-full px-6 py-2.5 text-sm font-medium tracking-wider text-yellow-orange transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-black rounded-md hover:bg-primary-black ${
              loading ? 'opacity-20 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? (
              <Loader className="inline-flex animate-spin size-4 text-yellow-orange" />
            ) : (
              'Enviar'
            )}
          </Button>
        </div>
        <Toaster richColors position="bottom-right" />
      </form>
    </>
  )
}
