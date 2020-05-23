import React from "react";
import "../css/online.css";

function copyText(event) {
  let element = `prueba-${event.target.id}`;
  let input = document.createElement("input");
  input.id = `input-${element}`;
  input.value = document.getElementById(element).firstChild.innerHTML;

  document.body.appendChild(input);
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(input);
}

export default function Online() {
  return (
    <div className="online">
      <ul className="prueba">
        <li className="prueba2">Telefonos:</li>
        <li className="prueba2">Correo:</li>
      </ul>
      <ul className="prueba">
        <li id="prueba-1" className="prueba2">
          <span>984578125</span>
          <i id="1" className="icon-content_copy copy" onClick={copyText}></i>
        </li>
        <li id="prueba-2" className="prueba2">
          expresionlatina@gmail.com
          <i id="2" className="icon-content_copy copy" onClick={copyText}></i>
        </li>
      </ul>
    </div>
  );
}
