'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Loader, LogOut, Settings, UserCog } from 'lucide-react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function DashboardPopover() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleLogout() {
    setLoading(true)
    localStorage.removeItem('accessToken')
    router.push('/')
  }

  return (
    <div className="flex items-center gap-x-5">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="user" />
        <AvatarFallback></AvatarFallback>
      </Avatar>

      <Popover>
        <PopoverTrigger asChild>
          <button className="hover:bg-gray-100 hover:p-1 hover:rounded-full">
            <Settings className="h-6 w-6" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-60">
          <div className="grid gap-4">
            <nav className="flex flex-col space-y-4">
              <Button className="bg-transparent flex items-center gap-x-2 text-xs font-semibold text-zinc-800 hover:text-primary-orange hover:bg-transparent">
                <UserCog className="h-5 w-5" />
                <Link href="#">Minha conta</Link>
              </Button>

              <Button
                onClick={handleLogout}
                className={`bg-transparent flex items-center gap-x-2 text-xs font-semibold text-zinc-800 hover:text-primary-red hover:bg-transparent ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={loading}
              >
                {loading ? (
                  <Loader className="inline-flex animate-spin size-4 text-primary-red" />
                ) : (
                  <LogOut className={`h-4 w-4 ${loading ? 'hidden' : ''}`} />
                )}
                <span>Encerrar sessão</span>
              </Button>
            </nav>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
