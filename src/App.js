import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './header_root/header';
import './App.css';
import MainContainer from './main_root/MainContainer';
import Main1 from './main_root/Main1';
import Main2 from './main_root/Main2';
import Main3 from './main_root/Main3';
import Footer from './footer_root/footer';

export default class App extends Component {
  
  state = {
    content: 'Inicio',
    dictionaryContent: {
      "Inicio": "main-container",
      "Profesores": "main-container3",
      "Videos": "main-container2"
    }
  }

  handleContent = (state) => {
    this.setState({
      content: state
    })
  }

  showContent = (main) => {
    switch (main) {
      case 'Inicio':
        return <Main1/>;
      case 'Profesores':
          return <Main2/>;
      case 'Videos':
        return <Main3/>;
      default:
        break;
    }
    
  }

  render () {
    const { content, dictionaryContent} = this.state;
    return (
      <div className="App">
        <Header
          handleContent = {this.handleContent}
        />
        <MainContainer
          dictionaryContent = {dictionaryContent}
          content={content}
        >
          {
            this.showContent(content)
          }
        </MainContainer>
        <Footer/>
      </div>
    );
  }
}
