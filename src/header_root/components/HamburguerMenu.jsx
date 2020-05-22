import React, { Component } from "react";
import "../css/hamburguerMenu.css";

export default class Hamburguer extends Component {
  showOptions = (event) => {
    let element = event.target.classList;

    if (element.contains("is-active")) {
      element.remove("is-active");
    } else {
      element.add("is-active");
    }
  };

  render() {
    return (
      <i
        className="icon-menu hamburguer-menu"
        onClick={this.props.handleIsMenuActive}
      >        
      </i>
    );
  }
}
