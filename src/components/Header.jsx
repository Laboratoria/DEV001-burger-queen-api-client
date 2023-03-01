import { useAuth } from './UseAuth'
export function Header () {
  const { logOut } = useAuth()
  const user = JSON.parse(window.localStorage.getItem('user'))
  const sessionOut = () => {
    window.localStorage.removeItem('user')
    console.log(user, 'bayy')
    logOut(user)
  }
  return (
    <button onClick={sessionOut}>Cerrar Sesion </button>
  )
}
