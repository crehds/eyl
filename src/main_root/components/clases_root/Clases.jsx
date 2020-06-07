import React, { Component } from "react";
import "./css/clases.css";
import Clase from "./components/Clase";
import Video from "./components/Video";

export default class Clases extends Component {
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
    clases: [],
  };

  componentDidMount() {
    this.state.generos.forEach((e, i) => {
      setTimeout(
        () =>
          this.setState({
            clases: this.state.clases.concat([{ id: i + 1, string: e }]),
          }),
        100 * (i + 1)
      );
    });
  }

  componentWillUnmount() {
    this.props.handleLoading();
  }

  render() {
    const { clases } = this.state;

    return (
      <div className="clases">
        {clases.map((e) => (
          <Clase content={e} />
        ))}
      </div>
    );
  }
}
