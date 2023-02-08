import './App.css'
import { Login } from './components/Login'
import './componentesCss/Login.css'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'
import './componentesCss/Menu.css'
import './componentesCss/Productos.css'
function App () {
  return (
    <section className='App'>

      <Routes>
        <Route path='/' element={(<Login />)} />
        <Route path='/Menu' element={(<Menu />)} />
      </Routes>

    </section>
  )
}

export default App
