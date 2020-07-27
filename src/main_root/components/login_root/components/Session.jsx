import React from "react";
import "../css/session.css";

export default function Session(props) {
  return (
    <form action="" className="session-form">
      <fieldset>
        <legend>Conéctate</legend>
        <input id="session-usuario" type="text" name="usuario" placeholder="Usuario" />
        <input id="session-password" type="password" name="password" placeholder="Contraseña" />
        <div className="form-session-buttons">
          <button className="form-button" onClick={props.showMessageDev}>Iniciar Sesión</button>
          <button className="form-button" onClick={props.createAccount}>Crea una cuenta</button>
        </div>
      </fieldset>
    </form>
  );
}
