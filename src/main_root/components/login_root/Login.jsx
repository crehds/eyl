import React, { Component } from "react";
import "./css/login.css";
import Register from "./components/Register";
import Session from "./components/Session";

export default class Login extends Component {
  state = {
    contentLogin: "Register",
  };

  componentWillUnmount() {
    this.props.handleLoading();
  }

  render() {
    return (
      <div className="login">
        {this.state.contentLogin === "Session" ? (
          <Session toggleContent={this.toggleContent} />
        ) : (
          <Register toggleContent={this.toggleContent} />
        )}
      </div>
    );
  }
}
