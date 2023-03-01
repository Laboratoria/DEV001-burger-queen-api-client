import './App.css'
import { Login } from './components/Login'
import './componentesCss/Login.css'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import './componentesCss/Menu.css'
import './componentesCss/Productos.css'
import { RutasPrivadas } from './components/RutasPrivadas'
import { useAuth } from './components/UseAuth'
function App () {
  const { user } = useAuth()
  console.log(user, 'aqui toyy')
  return (
    <section className='App'>
      <Routes>
        <Route path='/' element={(<Login />)} />
        <Route path='/Menu' element={<RutasPrivadas><Menu /></RutasPrivadas>} />
      </Routes>
    </section>
  )
}

export default App
