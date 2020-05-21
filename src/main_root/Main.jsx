import React from "react";
import "./css/mainContainer.css";
import Inicio from './components/Inicio.jsx';
import Profesores from './components/Profesores.jsx';
import Videos from './components/Videos.jsx';
import Contact from './components/Contact';

let dictionaryContent = {
  "Inicio": "inicio",
  "Profesores": "profesores",
  "Videos": "videos",
  "Contact":"contacto"
}

function showContent (content) {
  switch (content) {
    case 'Inicio':
      return <Inicio/>;
    case 'Profesores':
        return <Profesores/>;
    case 'Videos':
      return <Videos/>;
    case 'Contact':
      return <Contact/>;
    default:
      break;
  }
}
export default function Main(props) {
  return (
    <main className={dictionaryContent[props.content]}>
      {showContent(props.content)}
    </main>
  );
}
