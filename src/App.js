import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './header_root/header';
import './App.css';
import Main from './main_root/Main';
import Footer from './footer_root/footer';

export default class App extends Component {
  
  state = {
    content: 'Inicio',
  }

  handleContent = (state) => {
    this.setState({
      content: state
    })
  }

  render () {
    const { content } = this.state;
    return (
      <div className="App">
        <Header
          handleContent = {this.handleContent}
        />
        <Main
          content={content}
        />
        <Footer/>
      </div>
    );
  }
}
