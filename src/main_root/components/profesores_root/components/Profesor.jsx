import React, { PureComponent } from "react";
import "../css/profesor.css";

export default class Profesor extends PureComponent {
  render() {
    const { handleProfile, id, src, profesor } = this.props;
    return (
      <div
        id={`prof-${id}`}
        className="div-profesor"
        onClick={handleProfile}
        key={id}
      >
        <img
          id={`prof-image-${id}`}
          src={process.env.PUBLIC_URL + src}
          alt={profesor}
        />
      </div>
    );
  }
}
