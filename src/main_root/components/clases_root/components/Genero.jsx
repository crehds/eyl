import React, { PureComponent } from "react";
import "../css/clase.css";

export default class Genero extends PureComponent {
  render() {
    return (
      <div
        id={this.props.content.name}
        ref={this.props.setGeneroRef}
        className="clase"
        onClick={this.props.onclick}
      >
        {this.props.content.name}
      </div>
    );
  }
}
