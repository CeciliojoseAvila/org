import "./App.css";
import Header from "./componentes/Header/Header.js";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
import { useState } from "react";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";
import { v4 as uuid } from "uuid";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  //Ternario --> condicion ? seMuestra : noSeMuestra
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },

    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/CeciliojoseAvila.png",
      nombre: "CECILIO AVILA",
      puesto: "Estudiante",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Devops",
      foto: "https://github.com/CeciliojoseAvila.png",
      nombre: "CECILIO JOSE AVILA",
      puesto: "Estudiante de Programación",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },

    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
 
  //NUEVA LISTA DE EQUIPOS
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

 const cambiarMostrar = () => {  
   actualizarMostrar(!mostrarFormulario);
 }
  
  // Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    // Spread operator = ... (TRES PUNTICOS
    console.log("Nuevo colaborador", colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //ELIMINAR COLABORADOR
  const eliminarColaborador = (id) => { 
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //ACTUALIZAR COLOR DE EQUIPO
  const actualizarColor = (color, id) => { 
    console.log("Actualizar", color, id)
    const equiposActualizados = equipos.map((equipo) => { 
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  // CREAR EQUIPO
  const crearEquipo = (nuevoEquipo) => { 
   
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }
  // LIKES
  const like = (id) => { 
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => { 
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></> */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo }
      />}
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
     
      {
        equipos.map((equipo) => {
          return <Equipo datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={ like }
        />
        })
      }

      <Footer />
      
    </div>
  );
}

export default App;
