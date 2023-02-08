export function Productos ({ nombre, precio, tipo }) {
  return (
    <div className={tipo}>
      <p>{`${nombre} $  ${precio}.00`}</p>
      <button>Agregar</button>
    </div>
  )
}
