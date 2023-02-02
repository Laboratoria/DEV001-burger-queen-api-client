import Productos from "./components/Productos"
import { useState, useEffect, useContext } from 'react';
import ProductContext from './src/components/DataContext.jsx';

function Menu () {

    const { items } = useContext(ProductContext)
    const [db, setDb] = useState([]);

    useEffect(() => {
        const products = async () => {
            await fetch('http://localhost:3004/users') // hacemos la petición get
                .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
                .then(res => setDb(res)); // cuando hayamos terminado (then) actualizamos el estado nombre
        }
        products()
    }, []); 
    
    return (
        <>
            <>
                <Productos
                    producSelect='Café Americano'
                    cost='S/5.00'
                    //buttonClassName='Agregar'
                />
                <Productos
                    producSelect='Café Americano'
                    cost='S/5.00'
                    //buttonClassName='Agregar'
                />
                <Productos
                    producSelect='Café Americano'
                    cost='S/5.00'
                    //buttonClassName='Agregar'
                />
            </>
        </>
    )
}





export default Menu

