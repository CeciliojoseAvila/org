//import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {  
  //const [nombre variable, funcion-actualiza] = useState(valor inicial);
 console.log(props)
 // const [mostrar, actualizarMostrar] = useState(true)
 //const manejarClick = () => {
 // console.log("Mostrar/Ocultar elemento", !mostrar)
 //actualizarMostrar(!mostrar)
 // }

  return (
    <section className="org-section">
      <h3 className="titulo-org"> Mi organización </h3>
      <img src="/img/add.png" alt="logo add" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default MiOrg;
