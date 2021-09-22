const Contador = () => {//componente Contador
    const[contador, setContador] = React.useState(0);
    //cada que cambie el const , todo el componente se va a renderizar de nuevo
    const aumentar = () => setContador(contador + 1);
    const disminuir = () => setContador(contador - 1);

    return (//los buttons son funciones para lo que dice cada una, modifican el contador e invocan a la función setContador
        <div>
            <h2 className={contador < 0 ? "menor": "mayor"}> Contador : {contador}</h2>
            <hr />
            
            <button onClick = {aumentar}>Aumentar</button>
            <button onClick = {disminuir}>Disminuir</button>
        </div>
    );
};