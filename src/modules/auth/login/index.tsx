import Link from 'next/link'

import Head from '@/app/login/head'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { RegisterModal } from '@/modules/auth/register/register-modal'

import { CircleDollarSign, UserPlus } from 'lucide-react'
import { Form } from './login-form'

export default function Login() {
  return (
    <>
      <Head />
      <div className="bg-white min-h-screen flex flex-col lg:flex-row">
        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-l from-primary-orange via-medium-orange to-light-orange lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-xl">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-gradient-to-b from-black via-primary-black to-black rounded-full w-8 h-8"></span>
            <Link
              href="/"
              className="flex items-center gap-x-2 font-semibold text-primary-black text-xl"
            >
              Spendmanagement
              <CircleDollarSign className="size-6" />
            </Link>
          </div>

          <div className="flex flex-col space-y-5">
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug text-transparent bg-clip-text bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-orange font-extrabold">
              Controle total das suas despesas de forma simplificada
            </h1>
            <p className="text-lg font-light">Ainda não possui uma conta ?</p>

            <AlertDialog>
              <AlertDialogTrigger>
                <Button className="flex items-center gap-x-2 px-8 py-6 rounded-lg font-semibold bg-transparent border-[2.5px] border-black text-black hover:bg-black hover:text-white hover:border-none focus:bg-black focus:text-white focus:border-none transition-colors">
                  Criar uma nova conta
                  <UserPlus className="size-6" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <RegisterModal />
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <p className="font-medium">© 2023 - Todos os direitos reservados.</p>
        </div>

        {/* Responsive */}
        <div className="flex flex-1 flex-col items-center justify-center px-8 pt-2 relative">
          <div className="flex lg:hidden justify-between items-center w-full py-4">
            <div className="flex items-center justify-start space-x-2">
              <span className="bg-gradient-to-b from-light-orange via-medium-orange to-primary-orange rounded-full w-5 h-5"></span>
              <Link
                href="/"
                className="flex items-center gap-x-1 font-semibold text-xs"
              >
                Spendmanagement
                <CircleDollarSign className="size-4" />
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="bg-sky-200 text-xs tracking-tight font-medium text-sky-600">
                    Não possui conta?
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <RegisterModal />
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </>
  )
}
