import Productos from "./components/Productos"
import { useState } from 'react'
function Menu() {
    return (
        <>
            {/* <button > Desayuno</button>
            <button > Almuerzo/Cena</button> */}
            <><Productos
                producSelect='Café americano'
                cost='-S/5.00'
                add='Agregar'
            />
                <Productos
                    producSelect='Café con leche'
                    cost='-S/7.00'
                    add='Agregar'
                />
                <Productos
                    producSelect='Sandwich jamón y queso'
                    cost='-S/10.00'
                    add='Agregar'
                />
                <Productos
                    producSelect='Jugo de naranja'
                    cost='-S/7.00'
                    add='Agregar'
                />
            </>
        </>

    )
}
export default Menu