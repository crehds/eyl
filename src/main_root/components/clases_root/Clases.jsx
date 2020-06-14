import React, { Component } from "react";
import "./css/clases.css";
import Videos from "./components/Videos";
import { generos } from "../../../api/clases.json";
import Generos from "./components/Generos";
export default class Clases extends Component {
  state = {
    contentClases: "Clases",
    generos: [],
    generoSelected: "",
    ref: [],
  };

  setGeneros = (generos) => {
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
    this.setState({ generos });
  }

  setGeneroRef = (element) =>
    this.setState((prevState) => ({ ref: [...prevState.ref, element] }));

  cleanRef = () => {
    this.setState({ ref: [] });
  };

  setGeneroSelected = (generoSelected) => {
    this.setState({ generoSelected });
  };
  toggleContent = (event) => {
    if (this.state.contentClases === "Clases") {
      this.setGeneroSelected(event.target.id);
      return setTimeout(() => this.setState({ contentClases: "Videos" }), 1000);
    } else {
      return this.setState({ contentClases: "Clases" });
    }
  };

  componentWillUnmount() {
    this.props.handleLoading();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.addAnimation(this.state.ref);
    }
  }

  render() {
    const { generos } = this.state;

    if (this.state.contentClases === "Clases") {
      return (
        <Generos
          generos={generos}
          toggleContent={this.toggleContent}
          setGeneroRef={this.setGeneroRef}
        />
      );
    } else {
      return (
        <Videos
          toggleContent={this.toggleContent}
          contentTitle={this.state.generoSelected}
          cleanRef={this.cleanRef}
        />
      );
    }
  }
}
