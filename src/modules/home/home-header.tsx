import Link from 'next/link'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { RegisterModal } from '@/modules/auth/register/register-modal'
import { BadgePercent, BookCheck, CircleDollarSign, Info } from 'lucide-react'

export function HomeHeader() {
  return (
    <header className="mb-8 border-b">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between py-2 px-4 md:py-0 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-lg sm:text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          Spendmanagement
          <CircleDollarSign className="text-medium-orange size-6 md:size-8" />
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          <Link
            href="#"
            className="inline-flex items-center gap-x-1 text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-orange active:text-medium-orange"
          >
            <Info className="text-primary-green size-[22px]" />
            Sobre
          </Link>

          <Link
            href="#"
            className="inline-flex items-center gap-x-1 text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-orange active:text-medium-orange"
          >
            <BadgePercent className="text-primary-green size-[22px]" />
            Planos
          </Link>

          <Link
            href="#"
            className="inline-flex items-center gap-x-1 text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary-orange active:text-medium-orange"
          >
            <BookCheck className="text-primary-green size-5" />
            Tutorial
          </Link>
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Link href="/login">
            <Button className="bg-white rounded-none flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <svg
                className="h-6 w-6 text-black lucide lucide-log-in"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                Login
              </span>
            </Button>
          </Link>

          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-white rounded-none flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
                <svg
                  className="h-6 w-6 text-black lucide lucide-user-plus"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                  Cadastrar
                </span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <RegisterModal />
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  )
}
