import React, { Component } from "react";
import "./css/login.css";
import Register from "./components/Register";
import Session from "./components/Session";
import Swal from "sweetalert2";
import admin from "../../../api/admin.json";
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
    const admin = this.handlerLoginAdmin();
    if(admin) {
      this.props.handleIsAdmin()
      Swal.fire({
        icon: "success",
        text: "Bienvenida Doña Fernández",
      });
    } else {
      Swal.fire({
        icon: "info",
        text: "En desarrollo",
      });
    }
    // Swal.fire({
    //   icon: "info",
    //   text: "En desarrollo",
    // });
  };

  showDataForm = async (user, login) => {
    const result = await fetch("/login/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({user, login})
    }).then((result) => result.json()
    );
    console.log(result);
  };

  componentWillUnmount() {
    this.props.handleLoading();
  }

  handlerLoginAdmin = () => {
    const usuario = document.getElementById("session-usuario").value;
    const password = document.getElementById("session-password").value;
    if (admin.username === usuario && admin.password === password) {
      return true;
    }
    return false;
  };

  createAccount = (event) => {
    event.preventDefault();
    this.showMessageRegister();
    this.toggleContent();
  };

  showMessageRegister = () => {
    Swal.fire({
      icon: "info",
      text:
        "Luego de registrarte con datos básicos podrás añadir mas información a tu perfil",
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
            showDataForm={this.showDataForm}
          />
        )}
      </div>
    );
  }
}
