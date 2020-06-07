import React, { Component } from "react";
import "./css/clases.css";
import Clase from "./components/Clase";
import Videos from "./components/Videos";

export default class Clases extends Component {
  state = {
    contentClase: 'Clases',
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


  toggleContent = () => {
    if (this.state.contentClase === 'Clases') {
      return setTimeout(() => this.setState({contentClase : 'Videos'}), 1000)
    } else {
      return this.setState({contentClase : 'Clases'})
    }
  }

  componentWillUnmount() {
    this.props.handleLoading();
    
  }

  
  render() {
    const { clases } = this.state;

    if (this.state.contentClase === 'Clases') {
      return (
        <div className="clases">
          {clases.map((e) => (
            <Clase content={e} onclick={this.toggleContent}/>
          ))}
        </div>
      );
    } else {
      return <Videos
        toggleContent={this.toggleContent}
      />
    }
  }
}
