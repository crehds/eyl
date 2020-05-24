import React, { Component } from "react";
import "../css/hamburguerMenu.css";

export default class Hamburguer extends Component {
  
  render() {
    return (
      <i
        id="hamburguer"
        className="icon-menu hamburguer-menu"
        onClick={this.props.handleIsMenuActive}
      >        
      </i>
    );
  }
}
