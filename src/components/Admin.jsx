import { useState } from 'react'
import { Empleados } from './Empleados'
import { Productos } from './Productos'
import { Header } from './Header'
export function Admin () {
  const [esempleado, setesempleado] = useState(true)

  const handleClickEmpleados = () => {
    setesempleado(true)
  }

  const handleClickProductos = () => {
    setesempleado(false)
  }
  return (
    <>
      <Header />
      <button className='btn-desayuno' onClick={handleClickEmpleados}>Empleados</button>
      <button className='btn-almuerzo' onClick={handleClickProductos}>Productos</button>
      <div>{esempleado ? <Empleados /> : <Productos />}</div>
    </>
  )
}
