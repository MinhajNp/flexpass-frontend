import { createContext, useState } from 'react'

interface AuthContextValue {
  accessToken: string | null
  setAccessToken: (token: string | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null)
console.log('AuthProvider token:', accessToken)
  const logout = () => {
    setAccessToken(null)
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        setAccessToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext