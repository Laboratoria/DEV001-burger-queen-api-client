import { useAuth } from './UseAuth'
export function Header () {
  const { logOut } = useAuth()
  const user = JSON.parse(window.sessionStorage.getItem('user'))
  const sessionOut = () => {
    window.sessionStorage.removeItem('user')
    console.log(user, 'bayy')
    logOut(user)
  }
  return (

    <header className='caja-header'>
      <img className='img-cierre' src='../public/logout.png' alt='logo-sesion' onClick={sessionOut} />
    </header>
  )
}
