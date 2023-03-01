import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './UseAuth'
export function RutasPrivadas ({ children }) {
  const { login } = useAuth()
  const user = JSON.parse(window.localStorage.getItem('user'))
  useEffect(() => {
    login(user)
  }, [])

  if (!user) {
    return <Navigate to='/' />
  }
  return children
}
