import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { routes } from './routes/Router'

export default function App () {
  return (
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  )
}
