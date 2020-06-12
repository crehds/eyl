import React, { Component } from "react";
import "./css/clases.css";
import Clase from "./components/Clase";
import Videos from "./components/Videos";
import clases from "../../../api/clases.json";
export default class Clases extends Component {
  state = {
    contentClase: "Clases",
    clases: [],
  };

  setClases = (generos) => {
    this.setState({ clases: clases.generos });
  };
  componentDidMount() {
    this.setClases(clases);
  }

  toggleContent = () => {
    if (this.state.contentClase === "Clases") {
      return setTimeout(() => this.setState({ contentClase: "Videos" }), 1000);
    } else {
      return this.setState({ contentClase: "Clases" });
    }
  };

  componentWillUnmount() {
    this.props.handleLoading();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("aqui");
    }
  }

  prueba = (e) => {
    return <Clase content={e} onclick={this.toggleContent} />
  }
  render() {
    const { clases } = this.state;
    console.log(this.state.clasesTemplate);

    if (this.state.contentClase === "Clases") {
      return (
        <div className="clases">
          {clases.length > 0 &&
            clases.map((e, i) =>
            <Clase content={e} onclick={this.toggleContent} />
            )}
        </div>
      );
    } else {
      return <Videos toggleContent={this.toggleContent} />;
    }
  }
}
