import { Productos } from './Productos'
import { useEffect, useState } from 'react'
export function Menu () {
  const [db, setdb] = useState([])
  const [esdesayuno, setesdesayuno] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/productos') // hacemos peticion get
      .then(resp => resp.json())
      .then(resp => setdb(resp))
  }, [])
  console.log(db)

  const arraydesayuno = db.filter(producto => producto.type === 'breakFast')
  console.log(arraydesayuno)
  const arrayalmuerzo = db.filter(producto => producto.type === 'lunch')
  console.log(arrayalmuerzo)

  const handleClickDesayuno = () => {
    setesdesayuno(true)
    console.log(esdesayuno)
  }

  const handleClickAlmuerzo = () => {
    setesdesayuno(false)
    console.log(esdesayuno)
  }

  return (
    <div className='menu-padre'>
      <button className='btn-desayuno' onClick={handleClickDesayuno}>Desayuno</button>
      <button className='btnalmuerzo' onClick={handleClickAlmuerzo}>Almuerzo/Cena</button>
      <div className='productos'>
        {
            esdesayuno
              ? arraydesayuno.map(el => { // esto es como un if, si es desayuno muestre  ?
                return (
                  <Productos key={el.id} nombre={el.name} precio={el.price} tipo={el.type} />
                )
              })
              : arrayalmuerzo.map(el => { // si no muestre :
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
