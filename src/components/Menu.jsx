import { Productos } from './Productos'
import { useEffect, useState, useContext } from 'react'
import ProductContext from './DataContext'

export function Menu () {
  const [db, setdb] = useState([])
  const [totalCuenta, setTotalCuenta] = useState([])
  const [esdesayuno, setesdesayuno] = useState(true)
  const { items } = useContext(ProductContext)
  // const { setItems } = useContext(ProductContext)

  useEffect(() => {
    fetch('http://localhost:3000/productos') // hacemos peticion get
      .then(resp => resp.json())
      .then(resp => setdb(resp))
  }, [])
  // console.log(db)

  const arraydesayuno = db.filter(producto => producto.type === 'breakFast')
  // console.log(arraydesayuno)
  const arrayalmuerzo = db.filter(producto => producto.type === 'lunch')
  // console.log(arrayalmuerzo)

  const handleClickDesayuno = () => {
    setesdesayuno(true)
    // console.log(esdesayuno)
  }

  const handleClickAlmuerzo = () => {
    setesdesayuno(false)
    // console.log(esdesayuno)
  }

  const price = items.map(price => price.cost)
  const total = price.reduce((acc, el) => acc + el, 0)

  const addProducto = (product) => {
    setTotalCuenta(totalCuenta => [...totalCuenta, product])
  }
  console.log(totalCuenta)

  return (
    <div className='fondo'>
      <div className='menu-padre'>
        <div className='menu-opciones'>
          <button className='btn-desayuno' onClick={handleClickDesayuno}>Desayuno</button>
          <button className='btn-almuerzo' onClick={handleClickAlmuerzo}>Almuerzo</button>
        </div>
        <div className='productos'>
          {
            esdesayuno
              ? arraydesayuno.map(el => { // esto es como un if, si es desayuno muestre  ?
                return (
                  <Productos key={el.id} name={el.name} price={el.price} type={el.type} addProducto={addProducto} />
                )
              })
              : arrayalmuerzo.map(el => { // si no muestre :
                return (
                  <Productos key={el.id} name={el.name} price={el.price} type={el.type} addProducto={addProducto} />
                )
              })

        }
        </div>

        <div className='total-cuenta'> <h1 className='Cuenta'> Cuenta </h1>
          <ul>
            {
            totalCuenta.map((item) => <li className='chekear' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>{item.name} - ${item.price}</li>)
          }
          </ul>

          <h2 className='total-total'>Total :$ {total}.00</h2>

          <button className='btn-cocina'>Enviar/Cocina</button>
        </div>
      </div>
    </div>
  )
}
