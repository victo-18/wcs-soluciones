import React from "react";
import "../css/About.css";
import mv from "../images/vision-mision.jpg";
import mision2 from "../images/mision2.jpg";
import mision from "../images/vision-mision2.jpg";
import vision from "../images/vision-mision3.jpg";
import Footer from "../Components/Footer";

function About() {
  return (
      <div className="about">
        <header>
          <h1>Sobre nosotros</h1>
        </header>
        <section className="about-box">
          <div>
            <div className="card">
              <img src={mv} className="card-img-right" alt="imagen nosotros" />
              <p className="card-text">
                WCS es una empresa dedicada al diseño instalación de sistemas de
                riego. Instalación de sistemas de bombeo agricola y recidencial.
              </p>
            </div>
          </div>
        </section>

        <section className="about-box-vision">
          <h2>Visión</h2>
          <div>
            <div className="card">
              <img src={vision} className="card-img-right" alt="..." />
              <p className="card-text">
                WCS en los próximos 5 años será una empresa líder en la
                instalación de sistemas de riego, equipos de presión (motobombas),
                y equipos de tratamiento de agua potable a nivel regional.
              </p>
            </div>
          </div>
        </section>

        <section className="about-box-mision">
          <h2>Misión</h2>
          <div className="card">
            <img src={mision} className="card-img-right" alt="..." />
            <p className="card-text">
              En WCS trabajamos constantemente para que nuestros clientes tengan
              la atención y un servicio de calidad, con plena seguridad de que sus
              necesidades serán atendidas por personal calificado bajo los más
              altos estándares de construcción y servicio; utilizando las técnicas
              más innovadoras del mercado, brindando experiencia por que nuestros
              clientes son lo más importante para la compañía.
            </p>
          </div>
        </section>

        <section>
          <div className="card">
            <img src={mision2} className="card-img-right" alt="..." />
            <p className="card-text">
              Nuestro objetivo es ser una empresa consolidada a nivel estructural
              y organizacional, tener dos técnicos de planta. Diversificar las
              actividades realizadas por la compañía implementando nuevos
              servicios entre ellos la jardinería y el paisajismo.
            </p>
          </div>
        </section>
        <Footer />
      </div>
  );
}

export default About;
