import React, { Component } from 'react'
import '../css/videos.css';

export default class Videos extends Component {
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