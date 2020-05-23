import React from "react";
import "./css/mainContainer.css";
import Inicio from "./components/inicio_root/Inicio";
import Profesores from "./components/profesores_root/Profesores";
import Clases from "./components/clases_root/Clases";
import Contacto from "./components/contacto_root/Contacto";
import MainContainer from "./container/MainContainer";

function showContent(content) {
  switch (content) {
    case "Inicio":
      return <Inicio />;
    case "Profesores":
      return <Profesores />;
    case "Clases":
      return <Clases />;
    case "Contacto":
      return <Contacto />;
    default:
      break;
  }
}

export default function Main(props) {
  return <MainContainer>{showContent(props.content)}</MainContainer>;
}
