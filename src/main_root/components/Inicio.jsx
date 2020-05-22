import React, { Component } from "react";
import "../css/inicio.css";
import Template from "./template";
export default class Inico extends Component {
  state = {
    generos: [
      "Salsa",
      "Bachata",
      "Jazz",
      "Latin Urban",
      "Ladies",
      "Ballet",
      "Urban Style",
      "Mambo",
      "Body Movement",
    ],
    bailes: [],
  };

  handleCarrusel = (generos) => {};

  componentDidMount() {
    this.state.generos.forEach((e, i) => {
      setTimeout(
        () =>
          this.setState({
            bailes: this.state.bailes.concat([{ id: i + 1, string: e }]),
          }),
        1000 * (i + 1)
      );
    });
  }
  render() {
    const { bailes } = this.state;

    return (
      <div className="main1">
        {bailes.map((e) => (
          <Template content={e} />
        ))}
      </div>
    );
  }
}
