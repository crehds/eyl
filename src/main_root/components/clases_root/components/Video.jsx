import React from "react";
import '../css/video.css'
export default function Video(props) {
  return (
    <div className="video-box">
      <video
        src={process.env.PUBLIC_URL + props.src}
        controls
      ></video>
    </div>
  );
}
