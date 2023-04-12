import "./ListaOpciones.css"

const ListaOpciones = (props) => {   

  const manejarCambio = (e) => {
    console.log("Cambio", e.target.value)
    props.actualizarEquipo(e.target.value);
  };

    return (
      <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}> 
          <option value="" disabled difaultValue="" hidden> seleccionar un equipo</option>
          {props.equipos.map((equipo, index) => {
            return <option key={index} value={equipo} > {equipo} </option>;
          })}
        </select>
      </div>
    );    
}

export default ListaOpciones