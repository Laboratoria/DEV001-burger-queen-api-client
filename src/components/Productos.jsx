import { useContext } from 'react'
import ProductContext from './DataContext'

export function Productos ({ nombre, precio, tipo, addProducto }) {
  const { setItems } = useContext(ProductContext)

  

  return (
    <div className={tipo}>
      <p>{`${nombre} $${precio}.00`}</p>
      <button className='add-products' onClick={() => addProducto({ precio, nombre })}>Agregar</button>
      {/* <button>Agregar</button> */}
    </div>
  )
}
