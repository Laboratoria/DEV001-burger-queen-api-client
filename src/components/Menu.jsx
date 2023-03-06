import { Productos } from './Productos'
import { useEffect, useState } from 'react'
import { useAuth } from './useAuth'
import { Header } from './Header'
// import ProductContext from './DataContext'

export function Menu () {
  const [db, setdb] = useState([]) // Estado para llenar la base de datos
  const [totalCuenta, setTotalCuenta] = useState([]) // Este añade items
  const [esdesayuno, setesdesayuno] = useState(true) // Muestra el menú de desayunos
  // const { items } = useContext(ProductContext)
  // const { setItems } = useContext(ProductContext)
  // const [total, setTotal] = useState(0) //[total, setTotal] => esto es destructurar //

  // Con este useEffect hacemos la petición, antes de renderizarse se ejecuta esto
  useEffect(() => {
    fetch('http://localhost:3000/productos') // hacemos peticion get
      .then(resp => resp.json())
      .then(resp => setdb(resp))
  }, [])

  const arraydesayuno = db.filter(producto => producto.type === 'breakFast') // Aquí filtramos
  // console.log(arraydesayuno)
  const arrayalmuerzo = db.filter(producto => producto.type === 'lunch')
  // console.log(arrayalmuerzo)

  const handleClickDesayuno = () => {
    setesdesayuno(true) // Seteamos la lista de desayuno
    // console.log(esdesayuno)
  }

  const handleClickAlmuerzo = () => {
    setesdesayuno(false)
    // console.log(esdesayuno)
  }
  const price = totalCuenta.map(el => el.price)
  const total = price.reduce((a, b) => a + b, 0)
  const addProducto = (product) => { // addProduct
    setTotalCuenta(totalCuenta => [...totalCuenta, product])
    console.log(total)
  }
  const handleDelete = (item) => {
    // console.log(totalCuenta.filter((_, i) => totalCuenta.indexOf(item) !== i))
    // console.log(totalCuenta)
    setTotalCuenta(totalCuenta.filter((_, i) => totalCuenta.indexOf(item) !== i))
  }

  return (
    <>
      <Header />
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
            <ul className='tabla-productos'>
              {
              totalCuenta.map((item) => <li className='chekear' key={Math.random().toString(36).replace(/[^a-z]+/g, '')}>{item.name} - ${item.price}
                <img onClick={() => handleDelete(item)} className='btn-eliminar' src='../public/basura.png' />
              </li>)
            }
            </ul>

            <h2 className='total-total'>Total :$ {total}.00</h2>

            <button className='btn-cocina'>Enviar/Cocina</button>
          </div>
        </div>
      </div>
    </>
  )
}
