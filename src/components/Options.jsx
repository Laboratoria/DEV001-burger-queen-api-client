function Options({ optionSelect, cost }) {
    return (
        <div className="caja-opciones">
            <p className="opcion">{optionSelect}</p>
            <p className="cost">{cost}</p>
        </div>
    );
}


export default Options;