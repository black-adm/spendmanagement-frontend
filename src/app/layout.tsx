import '../styles/globals.css'

import { AuthProvider } from '../contexts/AuthContext'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spendmanagement',
  description: 'Generencie e controle seus gastos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>

  )
}