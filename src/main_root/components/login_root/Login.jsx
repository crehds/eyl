import React, { Component } from "react";
import "./css/login.css";
import Register from "./components/Register";
import Session from "./components/Session";
import Swal from "sweetalert2";

export default class Login extends Component {
  state = {
    contentLogin: "Session",
  };

  toggleContent = (event) => {
    if (event) event.preventDefault();
    if (this.state.contentLogin === "Session") {
      this.setState({ contentLogin: "Register" });
    } else {
      return this.setState({ contentLogin: "Session" });
    }
  };

  showMessageDev = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: "info",
      text: "En desarrollo",
    });
  };
  componentWillUnmount() {
    this.props.handleLoading();
  }

  createAccount = (event) => {
    event.preventDefault();
    this.showMessageRegister();
    this.toggleContent();
  }
  showMessageRegister= () => {
    Swal.fire({
      icon: "info",
      text: "Luego de registrarte con datos básicos podrás añadir mas información a tu perfil"
    });
  };

  render() {
    return (
      <div className="login">
        {this.state.contentLogin === "Session" ? (
          <Session
            createAccount={this.createAccount}
            showMessageDev={this.showMessageDev}
          />
        ) : (
          <Register
            toggleContent={this.toggleContent}
            showMessageDev={this.showMessageDev}
          />
        )}
      </div>
    );
  }
}
