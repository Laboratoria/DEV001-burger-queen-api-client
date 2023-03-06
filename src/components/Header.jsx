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
    // <div className='caja-header'>
    //   <button className='img-cierre' onClick={sessionOut}>Cerrar Sesion </button>
    // </div>
    <header className='caja-header'>
      <img className='logo-cierre' src='../public/cerrar-sesion.png' alt='logo-sesion' />
      <button className='img-cierre' onClick={sessionOut}>Cerrar Sesion </button>
    </header>
  )
}
