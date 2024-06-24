import { SignInPage } from '@/pages/signin/Index'
import { SignUpPage } from '@/pages/signup/Index'
import { ForgotPassword } from '@/pages/forgot-password/Index'
import { DashboardPage } from '@/pages/dashboard/Index'
import { Navigate, Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <Routes>
      <Route path='/login' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}