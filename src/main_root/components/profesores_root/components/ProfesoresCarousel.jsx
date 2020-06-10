import React from "react";
import Profesor from "./Profesor";

export default function ProfesoresCarousel(props) {
  // condicionales insertadas para evadir el valor inicial de undefined del carousel
  // En el componente padre es el subarreglo del carousel
  let aux = props.carousel ? props.carousel.length : 4;

  return (
    <div className={`div-container-profesor-${aux}`}>
      {props.carousel &&
        props.carousel.map((e) => (
          <Profesor
            handleProfile={props.handleProfile}
            id={e.id}
            src={e.src}
            profesor={e.profesor}
          />
        ))}
    </div>
  );
}
