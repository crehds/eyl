import React, { Component } from "react";
import './css/header.css'
import Menu from './menu';
import Logo from './logo';

export default class Header extends Component {
  
  render() {
    return <header className="App-header">
      <Logo/>
      <Menu
        handleContent={this.props.handleContent}
      />
    </header>;
  }
}
