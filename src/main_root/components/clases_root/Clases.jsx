import React, { Component } from "react";
import "./css/clases.css";
import Clase from "./components/Clase";
import Videos from "./components/Videos";
import clases from "../../../api/clases.json";
export default class Clases extends Component {
  state = {
    contentClase: "Clases",
    clases: [],
    ref: [],
  };

  setClases = (clases) => {
    let aux = this.addAnimation(this.state.ref);
    return aux;
  };

  addAnimation = (elements) => {
    elements.forEach((e, i) =>
      setTimeout(
        (e) => {
          e.style.animationName = "opacidad";
          e.style.animationDuration = "4s";
          e.style.aniamtionIterationCount = "1";
          e.style.animationTimingFunction = "steps(8)";
          e.style.opacity = "1";
        },
        100 * i,
        e
      )
    );
  };

  componentDidMount() {
    this.setState({ clases: clases.generos });
  }

  setClaseRef = (element) =>
    this.setState((prevState) => ({ ref: [...prevState.ref, element] }));

  cleanRef = () => {
    this.setState({ ref: [] });
  };

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
      this.addAnimation(this.state.ref);
      console.log("aqui");
    }
  }

  render() {
    const { clases } = this.state;
    if (this.state.contentClase === "Clases") {
      return (
        <div className="clases">
          {clases.length > 0 &&
            clases.map((e, i) => (
              <Clase
                key={i}
                content={e}
                onclick={this.toggleContent}
                setClaseRef={this.setClaseRef}
              />
            ))}
        </div>
      );
    } else {
      return (
        <Videos toggleContent={this.toggleContent} cleanRef={this.cleanRef} />
      );
    }
  }
}
