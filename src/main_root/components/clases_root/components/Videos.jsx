import React, { Component } from "react";
import "../css/videos.css";

export default class Videos extends Component {
  componentDidMount() {
    this.props.cleanRef();
  }
  render() {
    return (
      <div className="videos">
        <div className="description-video">
          <i
            className="icon-arrow-left3 arrow-video"
            onClick={this.props.toggleContent}
          ></i>
          <h3>Género</h3>
        </div>
        <div className="videos-container">
          <div className="video-box">
            <video
              src={process.env.PUBLIC_URL + "/videos/video_corto.mp4"}
              controls
            ></video>
          </div>
          <div className="video-box">
            <video
              src={process.env.PUBLIC_URL + "/videos/video_largo.mp4"}
              controls
            ></video>
          </div>
          <div className="video-box">
            <video
              src={process.env.PUBLIC_URL + "/videos/ladies_latinas.mp4"}
              controls
            ></video>
          </div>
          <div className="video-box">
            <video
              src={process.env.PUBLIC_URL + "/videos/como_llegar.mp4"}
              controls
            ></video>
          </div>
        </div>
      </div>
    );
  }
}
