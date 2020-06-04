import React from "react";

export default function ProfesoresCarousel(props) {
  // condicionales insertadas para evadir el valor inicial de undefined del carousel
  // En el componente padre es el subarreglo del carousel
  let aux = props.carousel ? props.carousel.length : 4;

  return (
    <div className={`div-container-profesor-${aux}`}>
      {props.carousel &&
      
      props.carousel.map((e, i) => (
        <div id={`prof-${i + 1}`} className="div-profesor" onClick={props.handleProfile} key={i}>
          <img id={`prof-image-${i + 1}`} src={process.env.PUBLIC_URL + e.src} alt={e.profesor} />
        </div>
      ))}
    </div>
  );
}
