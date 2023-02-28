import React from 'react'
import { useAuth } from './useAuth'

export const Header = () => {
  const { logOut } = useAuth()
  const user = window.sessionStorage.getItem('user')
  const sessionOut = () => {
    window.sessionStorage.removeItem('user')
    logOut(user)
  }

  const classIcon = user ? 'showIcon' : 'hideIcon'

  return (
    <header className='header-container'>
      <img className='img-cierresesion' src='public/cerra-sesion.png' />
      <span onClick={sessionOut} className={`icon-sign-out ${classIcon}`} />
    </header>
  )
}
