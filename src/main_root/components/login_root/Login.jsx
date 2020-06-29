import React, { Component } from "react";
import "./css/login.css";
import Register from "./components/Register";
import Session from "./components/Session";

export default class Login extends Component {
  state = {
    contentLogin: "Register",
  };

  toggleContent = (event) => {
    event.preventDefault();
    if (this.state.contentLogin === "Session") {
      this.setState({ contentLogin: "Register" })
    } else {
      return this.setState({ contentLogin: "Session" });
    }
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
