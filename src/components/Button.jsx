import { useContext } from 'react'
import ProductContext from './DataContext'

// function Button({ initialState, value, product }) {

// const { isAdd } = useContext(ProductContext);
// const { click } = useContext(ProductContext);

//     const [isAdd, setText] = useState(initialState)
//     let text = isAdd ? 'Añadir' : 'Elimar';
//     const click = () => {
//         setText(!isAdd)
//         if (isAdd) {
//             let items = [value, product]
//             console.log(items)
//         }
//     }
//     let buttonClassName = isAdd
//         ? 'add-products'
//         : 'add-products delete'
//     return (
//         <button className={buttonClassName} onClick={click}>{text}
//         </button>
//     )
// }
function Button ({ cost, producSelect }) {
  const { isAdd } = useContext(ProductContext)
  const { click } = useContext(ProductContext)

  const text = isAdd ? 'Añadir' : 'Eliminar'

  const buttonClassName = isAdd
    ? 'add-products'
    : 'add-products delete'
  return (
    <button className={buttonClassName} onClick={() => click(cost, producSelect)}>{text}
    </button>

  )
}

export default Button
