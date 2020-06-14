import React, { Component } from "react";
import "../css/videos.css";
import Video from "./Video";
import DescriptionVideo from './DescriptionVideo'
export default class Videos extends Component {
  componentDidMount() {
    this.props.cleanRef();
  }
  render() {
    const { videos,toggleContent, contentTitle } = this.props;
    return (
      <div className="videos">
        <DescriptionVideo
          toggleContent={toggleContent}
          contentTitle={contentTitle}
        />
        <div className="videos-container">
          {videos.map((video, i) => (
            <Video key={`video-${i}`} src={video.src} />
          ))}
        </div>
      </div>
    );
  }
}
