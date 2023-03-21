// import { useContext } from 'react'
// import ProductContext from './DataContext'

export function Productos ({ name, price, type, addProducto }) {
  // const { setItems } = useContext(ProductContext)

  return (
    <div className={type}>
      <p>{`${name} $${price}.00`}</p>
      <button className='add-products' onClick={() => addProducto({ price, name })}>Agregar</button>
      {/* <button>Agregar</button> */}
    </div>
  )
}
