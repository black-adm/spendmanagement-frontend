import { DashboardPage } from '@/pages/dashboard/Index'
import { SignInPage } from '@/pages/signIn/Index'
import { SignUpPage } from '@/pages/signUp/Index'
import { Navigate, Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <Routes>
      <Route path='/login' element={<SignInPage />} />
      <Route path='/cadastrar' element={<SignUpPage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}