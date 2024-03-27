import { Badge } from '@/components/ui/badge'
import { CircleDollarSign } from 'lucide-react'
import Link from 'next/link'
import { DashboardPopover } from './dashboard-popover'

export function DashboardHeader() {
  return (
    <header className="w-full h-auto py-5 border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="inline-flex items-center gap-2.5 text-base sm:text-lg font-bold text-black md:text-xl">
          Spendmanagement
          <CircleDollarSign className="text-medium-orange size-6 md:size-8" />
        </span>

        <div>
          <nav className="flex items-center gap-16">
            <Link
              href="#"
              className="text-sm font-medium text-zinc-700 hover:text-primary-orange"
            >
              Dashboard
            </Link>

            <Link
              href="#"
              className="text-sm font-medium text-zinc-700 hover:text-primary-orange"
            >
              Meus gastos
            </Link>

            <Link
              href="#"
              className="text-sm font-medium text-zinc-700 hover:text-primary-orange"
            >
              Transações
            </Link>
          </nav>
        </div>
        <Badge className="rounded-full text-zinc-800 bg-yellow-200 hover:bg-light-orange">
          7 dias grátis
        </Badge>

        <DashboardPopover />
      </div>
    </header>
  )
}
