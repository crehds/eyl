import React, { Component } from "react";
import "./css/menu.css";

class Menu extends Component {
  sendContent = (event) => {
    return this.props.handleContent(event.target.id);
  };

  render() {
    return (
      <ul className="menu">
        <li id={"Inicio"} onClick={this.sendContent}>
          Inicio
        </li>
        <li id={"Profesores"} onClick={this.sendContent}>
          Profesores
        </li>
        <li id={"Videos"} onClick={this.sendContent}>
          Videos
        </li>
        <li>Opción N</li>
      </ul>
    );
  }
}

export default Menu;
