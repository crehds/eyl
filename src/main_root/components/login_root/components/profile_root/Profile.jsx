import React, { Component } from "react";
import "./css/profile.css";
import ProfileHead from "./components/ProfileHead";
import ProfileBody from "./components/ProfileBody";
// import ProfileFooter from "./components/ProfileFooter";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <ProfileHead userRegistered={this.props.userRegistered} />
        <ProfileBody userRegistered={this.props.userRegistered}/>
      </div>
    );
  }
}
