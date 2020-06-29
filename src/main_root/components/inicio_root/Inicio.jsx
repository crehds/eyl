import React, { Component } from "react";
import "./css/inicio.css";
import Carousel from "nuka-carousel";
import posters from "../../../api/posters.json";

export default class Inico extends Component {
  state = {
    slideIndex: 0,
  };
  componentWillUnmount() {
    this.props.handleLoading();
  }

  render() {
    let timer;
    return (
      <div className="inicio">
        <Carousel
          autoplay
          slideIndex={this.state.slideIndex}
          beforeSlide={() => {
            clearTimeout(timer);
          }}
          afterSlide={(slideIndex) => {
            if (slideIndex === 4) {
              timer = setTimeout(() => this.setState({ slideIndex: 0 }), 5000);
            } else {
              this.setState({ slideIndex });
            }
          }}
          framePadding="0px 20px"
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "rgba(95, 209, 249, 1)",
            },
          }}
          getControlsContainerStyles={(key) => {
            switch (key) {
              case "CenterLeft":
                return {
                  position: "fixed",
                  top: "50%",
                  left: "-19px",
                };
              case "CenterRight":
                return {
                  position: "fixed",
                  top: "50%",
                  right: "-19px",
                };
              default:
                return {};
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
          {posters.posters.map((e, i) => (
            <img
              key={`img-inicio-${i}`}
              src={process.env.PUBLIC_URL + e.src}
              alt={e.description}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}
