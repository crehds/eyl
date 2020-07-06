import React, { Component } from "react";
import "./css/mainContainer.css";
import Inicio from "./components/inicio_root/Inicio";
import Profesores from "./components/profesores_root/Profesores";
import Clases from "./components/clases_root/Clases";
import Contacto from "./components/contacto_root/Contacto";
import MainContainer from "./container/MainContainer";
import Horario from "./components/horario_root/Horario";
import PageLoading from "../loading_root/PageLoading";
import Reseñas from "./components/reseñas_root/Reseñas";
import Login from "./components/login_root/Login";
import Admin from "../admin_root/Admin";

export default class Main extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: true }), 1000);
  }

  handleLoading = () => this.setState({ isLoading: false });

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      setTimeout(() => this.setState({ isLoading: true }), 1000);
    }
  }
  showContent = (content) => {
    switch (content) {
      case "Inicio":
        return <Inicio handleLoading={this.handleLoading} />;
      case "Profesores":
        return <Profesores handleLoading={this.handleLoading} />;
      case "Clases":
        return <Clases handleLoading={this.handleLoading} />;
      case "Horario":
        return <Horario handleLoading={this.handleLoading} />;
      case "Reseñas":
        return <Reseñas handleLoading={this.handleLoading} />;
      case "Contacto":
        return <Contacto handleLoading={this.handleLoading} />;
      case "Login":
        return <Login handleLoading={this.handleLoading} />;
      default:
        break;
    }
  };

  render() {
    if (this.state.isLoading === false) {
      return <PageLoading />;
    }
    return (
      <MainContainer>{this.showContent(this.props.content)}
      <Admin/></MainContainer>
    
    );
  }
}
