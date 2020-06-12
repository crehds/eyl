import React, { PureComponent } from "react";
import "../css/clase.css";

export default class Clase extends PureComponent {
  render() {
    return (
      <div
        ref={this.props.setClaseRef}
        className="clase"
        onClick={this.props.onclick}
      >
        {this.props.content.name}
      </div>
    );
  }
}
