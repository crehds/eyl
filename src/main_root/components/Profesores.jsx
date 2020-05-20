import React, { Component } from 'react'
import '../css/profesores.css';
import ProfileProfesor from './ProfileProfesor';

export default class Profesores extends Component {

  state = {
    profile: false,
  }

  showProfile = () => {
    if (this.state.profile){
      return this.setState({
        profile: false
      })
    } else {
      return this.setState({
        profile: true
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="div-container-profesor">
          <div className="div-profesor" onClick={this.showProfile}>Pr. 1</div>
          <div className="div-profesor" onClick={this.showProfile}>Pr. 2</div>
          <div className="div-profesor" onClick={this.showProfile}>Pr. 3</div>
          <div className="div-profesor" onClick={this.showProfile}>Pr. 4</div>
        </div>
        {
          this.state.profile &&
          <ProfileProfesor/>
        }
        <div>
          <div>F</div>
        </div>
      </React.Fragment>
    )
  }
}