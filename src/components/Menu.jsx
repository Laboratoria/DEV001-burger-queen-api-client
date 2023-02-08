import { Productos } from './Productos'
import { useEffect, useState } from 'react'
// import ProductContext from './DataContext'


export function Menu() {
  // const { items } = useContext(ProductContext)
  // const { setItems } = useContext(ProductContext)
  const [db, setdb] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/productos') // hacemos peticion get
      .then(resp => resp.json())
      .then(resp => setdb(resp))
  }, [])

  return (
    <div className='menu-padre'>
      <div className='productos'>
        {
          db.map(el => {
            return (
              <Productos key={el.id} nombre={el.name} precio={el.price} tipo={el.type} />
            )
          })

        }
      </div>
      <div className='total'>
        <p>Total</p>
        <button> Pagar</button>
      </div>
    </div>
  )
}
