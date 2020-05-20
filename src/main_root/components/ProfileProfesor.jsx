import React, { Component } from 'react'
import '../css/profileProfesor.css';

export default class ProfileProfesor extends Component {

  render() {
    return (
      <div className="profile-profesor">
        <div className="profile-title">
          <h3>Titulo</h3>
          <i className="icon-x x"></i>
        </div>
        <div className="profesor-image">
          Imagen
        </div>
        <div className="profesor-description">Descripción</div>
      </div>
    )
  }
}
