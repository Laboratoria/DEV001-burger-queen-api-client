import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ProductContextProvider } from './components/DataContext'

// captura el root y hace el render de App (pinta todo lo que hay en App)
ReactDOM.createRoot(document.getElementById('root')).render(
// BrowserRouter Es una herramienta de react-router-dom que hace las rutas (envuelve el App en lo que queremos usar como rutas)
  <BrowserRouter>
    {/* ProductContext Es un conexto que envuelve el componente que queremos comparta esa variable */}
    {/* Lo creamos pero no se usó */}
    <ProductContextProvider>
      {/* // App es el children de ProductContext */}
      <App />
    </ProductContextProvider>
  </BrowserRouter>
)
