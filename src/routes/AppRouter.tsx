import { SignInPage } from '@/pages/signin/Index'
import { Navigate, Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <Routes>
      <Route path='/login' element={<SignInPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}