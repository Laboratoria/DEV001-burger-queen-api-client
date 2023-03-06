import React from 'react';
import { useAuthContext } from "../Context/authContext";


const Table = () => {
    const {arrayContext, setArrayContext} = useAuthContext();
    return (
        <div>
         <h1>Orders</h1>
         <h2>Table:</h2>
         <input type='text' placeholder='Name client' />
        <table className="table">
  <thead>
    <tr>
      <th><abbr title="Position">ID</abbr></th>
      <th>DESCRIPTION</th>
      <th><abbr title="Played">UNIT PRICE</abbr></th>
      <th></th>
      <th><abbr title="Won">QTY</abbr></th>
      <th></th>
      <th><abbr title="Drawn">TOTAL</abbr></th>
      <th><abbr title="Lost">ACTION</abbr></th>
    </tr>
  </thead>
  <tbody>
    {arrayContext.map((element, index)=> (
        <>
     <tr key={element.id_product}>
      <th>{index +1}</th>
      <td>{element.name_product}</td>
      <td>$ {element.price_product}</td>
      <td><button>-</button></td>
      <td>{1}</td>
      <td><button>+</button></td>
      <td>{element.price_product * 1}</td>
      <td>
        <button>DELETE</button>
      </td>
    </tr>
        </>
    ))}
  </tbody>
</table>
{arrayContext.length != 0 ? <button>Send order</button> : null}
        </div>
    );
}

export default Table;
