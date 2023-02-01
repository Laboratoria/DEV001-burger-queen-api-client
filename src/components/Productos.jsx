
function Productos({ producSelect, cost }) {
    return (
        <div className="caja-opciones">
            <p className="opcion">{producSelect}</p>
            <p className="cost">{cost}</p>
        </div>
    );
}


export default Productos;