import React, { Component } from "react";
import "../css/videos.css";
import Video from "./Video";
import DescriptionVideo from "./DescriptionVideo";
export default class Videos extends Component {
  setHeightContainer = () => {
    const videosContainer = document.getElementById("videos-container");
    const height = window.innerHeight;

    let vh = window.innerHeight * 0.01;

    if (height >= 640) {
      videosContainer.style.height = `${vh * 57}px`;
    } else {
      videosContainer.style.height = `${vh * 61}px`;
      videosContainer.style.gridTemplateRows = `170px 170px`;
      videosContainer.style.gridAutoRows = "170px";
    }
  };

  componentDidMount() {
    this.props.cleanRef();
    this.setHeightContainer();
  }
  render() {
    const { videos, toggleContent, contentTitle } = this.props;
    return (
      <div className="videos">
        <DescriptionVideo
          toggleContent={toggleContent}
          contentTitle={contentTitle}
        />
        <div id="videos-container" className="videos-container">
          {videos.map((video, i) => (
            <Video key={`video-${i}`} src={video.src} />
          ))}
        </div>
      </div>
    );
  }
}
