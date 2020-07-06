import React, { Component } from "react";
import "../css/modalAdmin.css";

export default class ModalAdmin extends Component {
  state = {
    addPoster: false,
    image: [],
  };

  addPoster = () => {
    if (this.state.addPoster) {
      return this.setState({ addPoster: false });
    }
    return this.setState({ addPoster: true });
  };

  saveImg = (event) => {
    event.preventDefault();
    const image = [...event.target.files].map((file) => {
      let reader = new FileReader();
      let image = new Image()
      reader.readAsDataURL(file)
      reader.onload = () => {
        image.src = reader.result
      }
      return image
    });
    return this.setState({ image });
  };

  sendImgs = async (event) => {
    
    event.preventDefault();
    const form = document.getElementById("form-prueba")
    const formData = new FormData(form);
    const response = await fetch("/inicio", {
      method: "POST",
      body: formData
    }).then((result) => result.json());
    console.log(response);
  };
  render() {
    return (
      <div className="admin-modal">
        <h3>Administrador</h3>
        <div className="admin-modal__buttons">
          <button onClick={this.addPoster}>Nuevo Poster</button>
          {this.state.addPoster && (
            <form action="" id="form-prueba" className="admin-modal__form" onSubmit={this.sendImgs}>
              <input
                type="file"
                name="image"
                multiple="multiple"
                onChange={this.saveImg}
              />
              <button type="submit">Añadir</button>
            </form>
          )}
          <button>Actualizar una imagen</button>
        </div>
      </div>
    );
  }
}
