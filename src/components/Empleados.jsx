import { useEffect, useState } from 'react'
export function Empleados () {
  const [db, setdb] = useState([])
  useEffect(() => {
    fetch('http://localhost:3004/users')
      .then(resp => resp.json())
      .then(resp => setdb(resp))
  }, [])
  console.log(db)
  return (
    <>
      <button type='button' class='btn btn-success'>Success</button>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>NOMBRE</th>
            <th scope='col'>EMAIL</th>
            <th scope='col'>ROL</th>
            <th scope='col'>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {
                db.map(empleado => (
                  <tr key={empleado.email}>
                    <th scope='row'>{empleado.id} </th>
                    <td>{empleado.name} </td>
                    <td>{empleado.email} </td>
                    <td> {empleado.roles.mesero ? 'mesero' : 'admin'} </td>
                    <td>
                      <button type='button' class='btn btn-danger'>ELIMINAR</button>

                      <button type='button' class='btn btn-primary'>EDITAR</button>

                    </td>
                    {console.log(empleado.roles.mesero)}
                  </tr>
                ))
            }
        </tbody>
      </table>
    </>
  )
}

/* <tr>
            <th scope='row'>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */
