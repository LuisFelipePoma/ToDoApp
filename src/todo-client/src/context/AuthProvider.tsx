import { useContext, createContext, useState } from 'react'

interface User {
  _id: string
  username: string
}

const AuthContext = createContext({
  isAuthenticated: false
})
export function AuthProvider ({ children }: { children: any }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState<User>()

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
