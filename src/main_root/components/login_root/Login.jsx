import React, { Component } from "react";
import "./css/login.css";
import Register from "./components/Register";
import Session from "./components/Session";
import Profile from "./components/profile_root/Profile";
import Swal from "sweetalert2";
import admin from "../../../api/admin.json";
export default class Login extends Component {
  state = {
    contentLogin: "Session",
  };

  showMessageDev = (event) => {
    event.preventDefault();
    const admin = this.handlerLoginAdmin();
    if (admin) {
      this.setState({ contentLogin: "Profile" });
      this.props.handleIsAdmin();
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
      body: JSON.stringify({ user, login }),
    }).then((result) => result.json());
    console.log(result);
  };

  handlerLoginAdmin = () => {
    const usuario = document.getElementById("session-usuario").value;
    const password = document.getElementById("session-password").value;
    if (admin.username === usuario && admin.password === password) {
      return true;
    }
    return false;
  };

  showMessageRegister = () => {
    Swal.fire({
      icon: "info",
      text:
        "Luego de registrarte con datos básicos podrás añadir mas información a tu perfil",
    });
  };

  handleStateLogin = (event) => {
    return this.setState({ contentLogin: event.target.id });
  };

  handleContentLogin = (content) => {
    switch (content) {
      case "Session":
        return (
          <Session
            handleStateLogin={this.handleStateLogin}
            showMessageDev={this.showMessageDev}
          />
        );
      case "Register":
        this.showMessageRegister();
        return (
          <Register
            handleStateLogin={this.handleStateLogin}
            showMessageDev={this.showMessageDev}
            showDataForm={this.showDataForm}
          />
        );
      case "Profile":
        return <Profile toggleContent={this.toggleContent} />;
      default:
        break;
    }
  };

  componentWillUnmount() {
    this.props.handleLoading();
  }

  render() {
    return (
      <div className="login">
        {this.handleContentLogin(this.state.contentLogin)}
      </div>
    );
  }
}
