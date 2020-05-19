import React from "react";
import "./css/mainContainer.css";
import Inicio from './components/Inicio.jsx';
import Profesores from './components/Profesores.jsx';
import Videos from './components/Videos.jsx';

let dictionaryContent = {
  "Inicio": "main-container",
  "Profesores": "main-container3",
  "Videos": "main-container2"
}

function showContent (content) {
  switch (content) {
    case 'Inicio':
      return <Inicio/>;
    case 'Profesores':
        return <Profesores/>;
    case 'Videos':
      return <Videos/>;
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

