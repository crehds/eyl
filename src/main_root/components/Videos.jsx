import React, { Component } from 'react'
import '../css/main3.css';

export default class Main3 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="description-video">Descripcion del video</div>
          <div className="video-box">
            <video src="" controls></video>
          </div>
      </React.Fragment>
    )
  }
}