import React, { Component } from "react";
import "./css/inicio.css";
import Carousel from "nuka-carousel";
import posters from "../../../api/posters.json";

export default class Inico extends Component {
  render() {
    return (
      <div className="inicio">
        <Carousel
          framePadding="20px"
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "rgba(255,194,48)",
            },
          }}
          getControlsContainerStyles={(key) => {
            switch (key) {
              case "CenterLeft":
                return {
                  left: "-10px",
                };
              case "CenterRight":
                return {
                  right: "-10px",
                };
              default:
                break;
            }
          }}
          renderCenterLeftControls={({ previousSlide }) => (
            <div className="inicio-arrow">
              <i
                className="icon-keyboard_arrow_left"
                onClick={previousSlide}
              ></i>
            </div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div className="inicio-arrow">
              <i className="icon-keyboard_arrow_right" onClick={nextSlide}></i>
            </div>
          )}
        >
          {posters.posters.map((e) => (
            <img src={e.src} alt={e.description} />
          ))}
        </Carousel>
      </div>
    );
  }
}
