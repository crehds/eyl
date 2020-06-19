import React, { Component } from "react";
import "./css/reseñas.css";

export default class Reseñas extends Component {
  componentWillUnmount() {
    this.props.handleLoading();
  }

  render() {
    return (
      <div className="reseñas">
        <textarea
          className="reseña-user"
          name="reseña"
          id="1"
          cols="30"
          rows="5"
          placeholder="Aun sin contenido"
        >
            Excelente escuela. Todos los profesores están bien capacitados ,excepto un
            tal mishel, que dice ser campeón.
        </textarea>

        <div className="randomuser">
          <div className="randomuser-image">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=actitud-apariencia-atractivo-belleza-415829.jpg&fm=jpg"
              alt="userrostro"
            />
          </div>
          <div className="randomuser-data">Evelyn</div>
        </div>
      </div>
    );
  }
}
