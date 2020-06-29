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
        <button className="form-button">Registrarme</button>
      </fieldset>
    </form>
  );
}
