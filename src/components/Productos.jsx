import { useContext } from 'react'
import ProductContext from './DataContext'

export function Productos({ nombre, precio, tipo }) {
  const { setItems } = useContext(ProductContext)

  const addProduct = (product) => {
    setItems(items => [...items, product])
  }

  return (
    <div className={tipo}>
      <p>{`${nombre} $${precio}.00`}</p>
      <button className='add-products' onClick={() => addProduct({ precio, nombre })}>Agregar</button>
      {/* <button>Agregar</button> */}
    </div>
  )
}
