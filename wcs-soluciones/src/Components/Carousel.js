import React from "react";

import carousel1 from "../images/carousel1.jpeg";
import carousel2 from "../images/carousel2.jpeg";
import carousel3 from "../images/carousel3.jpeg";
import "../css/carrusel.css";
export default function Carousel() {
  return (
    <div className="contenedor__carousel">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ zIndex: "5px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className=" carousel__inner--img" src={carousel1} alt="imagen servicio" />
          </div>
          <div className="carousel-item">
            <img className=" carousel__inner--img" src={carousel2} alt="imagen servicio" />
          </div>
          <div className="carousel-item">
            <img className=" carousel__inner--img" src={carousel3} alt="imagen servicio" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          // style={{ display: "none" }}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
         // style={{ display: "none" }}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
