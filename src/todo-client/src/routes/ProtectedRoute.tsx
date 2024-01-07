import { Navigate } from 'react-router-dom'
import HomeLayout from '../pages/HomeLayout'
import { useAuth } from '../context/AuthProvider'
export default function ProtectedRoute () {
  const auth = useAuth()
  return auth.isAuthenticated ? <HomeLayout /> : <Navigate to='/' />
}
