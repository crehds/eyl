import React, { Component } from 'react'
import '../css/profileProfesor.css';
import image from '../../assets/profesores/mishel_fernandez.jpg';

export default class ProfileProfesor extends Component {

  render() {
    return (
      <div className="profile-profesor">
        <div className="profile-title">
          <h3>Titulo</h3>
          <i className="icon-x x" onClick={this.props.showProfile}></i>
        </div>
        <div className="profesor-image">
          <img src={image} alt="mishel fernandez"/>
        </div>
        <div className="profesor-description">Descripción</div>
      </div>
    )
  }
}
