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

    <header className='caja-header'>
      <img className='img-cierre' src='../public/logout.png' alt='logo-sesion' onClick={sessionOut} />
    </header>
  )
}
