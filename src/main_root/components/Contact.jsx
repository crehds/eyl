import React, { Component } from 'react'
import Mapa from './Mapa';
import Online from './Online';

import '../css/contact.css';
export default class Contact extends Component {

  state = {
    content:"mapa"
  }

  showContact = (contact) => {
    switch (contact) {
      case 'mapa':
        return <Mapa/>
      case 'online':
        return <Online/>
      default:
        break;
    }
  }

  setContent = (event) => {
    let id = event.target.id
    this.setState({
      content: id
    })
  }
  render() {
    return (
      <React.Fragment>
        <h3 id="mapa" onClick={this.setContent}>Mapa</h3>
        <h3 id="online" onClick={this.setContent}>Online</h3>
        {
          this.showContact(this.state.content)
        }
      </React.Fragment>
    )
  }
}
