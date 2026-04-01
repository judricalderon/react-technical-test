import { Navigate, Outlet } from 'react-router-dom'

import useAuthStore from '@/stores/auth.store'

const AuthLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <Outlet />
    </div>
  )
}

export default AuthLayout
