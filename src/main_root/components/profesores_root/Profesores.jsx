import React, { Component } from "react";
import "./css/profesores.css";
import ProfileProfesorModal from "./components/ProfileProfesorModal";
import ProfesoresCarousel from "./components/ProfesoresCarousel";
import profesores from "../../../api/profesores.json";
import Arrow from "./components/Arrow";

export default class Profesores extends Component {
  state = {
    profile: false,
    src: "",
    profesor: "",
    genero: "",
    carousel: [],
    carouselId: 0,
  };

  handleProfesors = (profesores) => {
    let length = profesores.length;
    let carousel = [];
    for (let i = 0; i <= length; i = i + 4) {
      carousel.push(profesores.slice(i, i + 4));
    }

    this.setState({
      carousel,
    });
  };

  handleProfile = (event) => {
    let element = event.target.id;
    let profesorId = element.slice(-1);
    let profesor = profesores.images.find((e) => e.id === profesorId);
    this.setState({
      src: profesor.src,
      profesor: profesor.profesor,
      genero: profesor.genero,
    });
    this.showProfile();
  };

  showProfile = () => {
    if (this.state.profile) {
      return this.setState({
        profile: false,
        src: "",
        profesor: "",
        genero: "",
      });
    } else {
      return this.setState({
        profile: true,
      });
    }
  };

  handleArrow = (event) => {
    let direction = event.target.id;
    if (direction === "left") {
      if (this.state.carouselId === 0) {
        return this.setState({
          carouselId: this.state.carousel.length - 1,
        });
      }
      return this.setState({
        carouselId: this.state.carouselId - 1,
      });
    } else {
      if (this.state.carouselId === this.state.carousel.length - 1) {
        return this.setState({
          carouselId: 0,
        });
      }
      return this.setState({
        carouselId: this.state.carouselId + 1,
      });
    }
  };

  componentDidMount() {
    this.handleProfesors(profesores.images);
  }

  render() {
    const { src, profesor, genero, carousel, carouselId } = this.state;
    return (
      <div className="profesores">
        <ProfesoresCarousel
          handleProfile={this.handleProfile}
          carousel={carousel[carouselId]}
        />
        {this.state.profile && (
          <ProfileProfesorModal
            showProfile={this.showProfile}
            src={src}
            profesor={profesor}
            genero={genero}
          />
        )}
        <Arrow handleArrow={this.handleArrow} />
      </div>
    );
  }
}
