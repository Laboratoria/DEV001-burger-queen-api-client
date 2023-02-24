import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { Alignment, Media } from 'react-data-table-component';
import DataTable from 'react-data-table-component';
import 'styled-components'

const Board = () => {
<<<<<<< HEAD
  const [pedido, setpedido] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const URL = 'http://localhost:5003/orders'
  const showData = async () => {
    const response = await fetch(URL)
    const data= await response.json()
    console.log(data)
    setpedido(data)
  }
  useEffect(() => {
    console.log('state', selectedRows);
    showData()
  }, [ selectedRows]);

  const handleButtonClick = () => {
		
		console.log('clicked');
	};

	const handleChange = useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

const columns = [
{
  name: 'ID',
  selector: row => row.id_order,
  grow: 0,
  hide: Media.SM,
  center: true
},
{
  name: 'DESCRIPTION',
  selector: row => row.client_id_client,
  center: true
},
{
  //aki debemos colocar row. la suma de la cantidad de productos que pidan
  name: 'AMOUNT',
  selector: row => row.order_preci_order,
  center: true
},
{
  name: 'TOTAL',
  center: true
},
{
  name: 'EDIT',
  cell: () => <button onClick={handleButtonClick}><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/35/null/external-edit-web-flaticons-flat-flat-icons-8.png"/></button>,
	ignoreRowClick: true,
	allowOverflow: true,
	button: true,
  
},
{
  name: 'DELETE',
  cell: () => <button onClick={handleButtonClick}><img src="https://img.icons8.com/stickers/35/null/delete-forever.png"/></button>,
	ignoreRowClick: true,
	allowOverflow: true,
	button: true,

},

]
const customStyles = {
  rows: {
      style: {
          minHeight: '20px', // override the row 
      },
  },
  headCells: {
      style: {
          paddingLeft: '5px', // override the cell padding for head cells
          paddingRight: '5px',
          backgroundColor: 'rgb(99, 233, 152)'
      },
  },
  cells: {
      style: {
          paddingLeft: '2px', // override the cell padding for data cells
          paddingRight: '2px',
          minHeight: '10px',
         
      },
  },
=======
  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead className="has-background-grey-light">
          <tr>
            <th>ID</th>
            <th>DESCRIPTION</th>
            <th>AMOUNT</th>
            <th>TOTAL</th>
            <th>
              <abbr title="Drawn"></abbr>
            </th>
            <th>
              <abbr title="Lost"></abbr>
            </th>
          </tr>
        </thead>
        <tbody className="has-background-grey-lighter">
          <tr>
            <th>1</th>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <img src="https://img.icons8.com/external-soft-fill-juicy-fish/40/null/external-edit-essentials-soft-fill-soft-fill-juicy-fish.png" />
            </td>
            <td>
              <img src="https://img.icons8.com/plasticine/50/null/filled-trash.png" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
>>>>>>> f6d715e09db834d3a7d1a792223524d8d68d413f
};

    return (
      <div className='App'>
       <DataTable
       columns={columns}
       data={pedido}
       title="Orders"
       center="true"
       responsive={true}
       subHeaderAlign={Alignment.CENTER}
		   highlightOnHover
		   pointerOnHover
       fixedHeaderScrollHeight= "true"
       customStyles={customStyles}
      //  onColumnOrderChange={selectedRows}
       
/>
  
</div>

    );
}

export default Board;
