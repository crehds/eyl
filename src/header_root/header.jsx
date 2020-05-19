import React, { Component } from "react";
import './css/header.css'
import Menu from './menu';
import Logo from './logo';
import HamburguerMenu from './components/HamburguerMenu';

export default class Header extends Component {
  
  render() {
    return <header className="App-header">
      <Logo/>
      <HamburguerMenu/>
      {/*<Menu
        handleContent={this.props.handleContent}
      />*/}
    </header>;
  }
}
