import React, { Component } from "react";
import "../css/menu.css";
import HamburguerMenu from "./HamburguerMenu";
import Options from "./Options";

class Menu extends Component {
  sendContent = (event) => {
    return this.props.handleContent(event.target.id);
  };

  handleIsMenuActive = (event) => {
    let hamburguerClass = event.target.classList;
    let menuClass = document.getElementById("menu").classList;

    if (hamburguerClass.contains("is-active")) {
      hamburguerClass.remove("is-active");
      menuClass.remove("is-active");
    } else {
      hamburguerClass.add("is-active");
      menuClass.add("is-active");
    }
  };

  render() {
    return (
      <div id="menu" className="menu">
        <HamburguerMenu handleIsMenuActive={this.handleIsMenuActive} />
        <Options sendContent={this.sendContent} />
      </div>
    );
  }
}

export default Menu;
