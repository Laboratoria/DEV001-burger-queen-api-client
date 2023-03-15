import './App.css'
import { Login } from './components/Login'
import './componentesCss/Login.css'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import './componentesCss/Menu.css'
import './componentesCss/Productos.css'
import { RutasPrivadas } from './components/RutasPrivadas'
import { useAuth } from './components/UseAuth'
import { Admin } from './components/Admin'
import { useEffect, useState } from 'react'
function App () {
  useAuth()
  const [user, setuser] = useState(null)
  useEffect(() => {
    setuser(JSON.parse(window.sessionStorage.getItem('user')))
  }, [])
  // const { user } = useAuth()
  console.log(user, 'aqui toyy')
  console.log(user)
  return (
    <section className='App'>
      <Routes>
        <Route path='/' element={(<Login />)} />
        <Route path='/menu' element={<RutasPrivadas isAlowed={user && user.user.roles.mesero}><Menu /></RutasPrivadas>} />
        <Route path='/admin' element={<RutasPrivadas isAlowed={user && user.user.roles.admin}><Admin /></RutasPrivadas>} />
      </Routes>
    </section>
  )
}

export default App
