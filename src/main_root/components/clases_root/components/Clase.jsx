import React, { PureComponent } from "react";
import "../css/clase.css";

export default class Clase extends PureComponent {
  render() {
    return <div className="clase" onClick={this.props.onclick}>{this.props.content.name}</div>;
  }
}
