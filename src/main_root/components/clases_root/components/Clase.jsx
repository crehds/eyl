import React, { PureComponent } from "react";
import "../css/clase.css";

export default class Clase extends PureComponent {
  render() {
    return <div className="clase">{this.props.content.string}</div>;
  }
}
