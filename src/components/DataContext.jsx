import React, { useState, createContext } from 'react'

const ProductContext = createContext() // createContext es para una hacer un estado global que alcance un componente mas pequeño

// children es una prop, un hijo, podría ser un componente, un h1, etc
export function ProductContextProvider ({ children }) {
  const [items, setItems] = useState([]) // aqui hacemos la logica y qué queremos compartir con otros componentes

  return (
    <ProductContext.Provider value={{ items, setItems }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductContext
