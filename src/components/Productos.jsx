import { createContext, useContext, useState } from 'react';
import ProductContext from './src/components/DataContext.jsx';

const producSelect = createContext();

function Productos({ producSelect, cost }) {
    
    const [isAdded, setIsAdded] = useState(false)
    const { items } = useContext(ProductContext)
    const { setItems } = useContext(ProductContext)

    const addProduct = (product) => {
        const productAdded = items.find(productAdded => productAdded.producSelect === product.producSelect)
        if (!productAdded) {
            setItems(items => [...items, product])
            setIsAdded(true)
        } else {
            setItems(products => products.filter(product => product.producSelect !== productAdded.producSelect))
            setIsAdded(false)
        }
    }


    let text = isAdded ? 'Eliminar' : 'Añadir';
    let buttonClassName = isAdded
        ? 'add-products delete'
        : 'add-products'
    
    return (
        <div className="caja-opciones">
            <div className='caja-producto'>
                <p className="opcion">{producSelect}</p>
                <p className="cost">{cost}</p>
                <button className={buttonClassName} onClick={() => addProduct({ cost, productName })}>{text}</button>
            </div>
        </div>
    );
}


export default Productos;