import React from "react";
import '../css/register.css';

export default function Register(props) {
  return (
    <form action="" className="register-form">
      <fieldset>
        <legend>Regístrate</legend>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />
        <div className="form-register-buttons">
          <button className="form-button" onClick={props.showMessageDev}>Registrarme</button>
          <button className="form-button" onClick={props.toggleContent}>Volver</button>
        </div>
      </fieldset>
    </form>
  );
}
