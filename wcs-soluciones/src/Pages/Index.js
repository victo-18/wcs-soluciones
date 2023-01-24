import React from "react";
import "../css/index.css";
import fondo_header2 from "../images/fondo_header2.jpg";
import instalacion from "../images/servicios.jpg";
import diseño from "../images/servicios4.jpg";
import asesoria from "../images/vision-mision2.jpg";
import mantenimiento from "../images/servicios2.jpg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "../css/animations.css";

function Index() {
  return (
    <div className="index">
      <header className="position-relative" style={{ top: 0 }}>
        <div className="header_superior">
          <h1>WCS</h1>
          <h3>Soluciones en riego</h3>
        </div>

        <div className="container_info text-center">
          <div className="row">
            <div className="col order-last">
              <i className="bi bi-telephone-fill me-1"></i>3137705999
            </div>
            <div className="col">
              <i className="bi bi-envelope me-1"></i>
              wcssolucionesenriego@gmail.com
            </div>
            <div className="col order-first">
              <i className="bi bi-clock me-1"></i>Lunes a viernes 8:00am a
              4:00pm
            </div>
          </div>
        </div>
      </header>

      <div className="card">
        <div className="card-body">
          <p className="card-textindex">
            Somo una empresa responsable con el medio ambiente, dedicada a la
            construccion, diseño e implementación de sistemas de riego, para
            jardines, fincas, canchas de futbol. Construimos y diseñamos
            sietemas de bombeo para la instalación de sistema de riego por
            asperción.
          </p>
        </div>
      </div>

      <div className="nosotros">
        <h2>Sobre nosotros</h2>
        <div className="nosotros--img">
        <img src={fondo_header2} className="img-fluid" alt="" />
        </div>
        <div className="card">
          <div className="card-body">
            <p className="card-textindex2">
              Nuestar prioridad es la satisfación de nuestro clientes por eso
              contamos con personal altamente clalificado, muy competente
              quienes pondran a tu disposición todo su conocimiento,experiencia
              para garantizar la total satisfación de nuestro clientes.
            </p>
          </div>
        </div>
      </div>
      <section className="servicios">
        <h2>Servicios</h2>

        <div className="contenedor-service">
          <div>
            <Link to="/asesoria">
              <button>
                <img src={asesoria} alt="" />
              </button>
            </Link>
            <h3>Asesoría</h3>
          </div>
          <div>
            <Link to="/design">
              <button>
                <img src={diseño} alt="" />
              </button>
            </Link>
            <h3>Diseño</h3>
          </div>
          <div>
            <Link to="/instalacion">
              <button>
                <img src={instalacion} alt="" />
              </button>
            </Link>
            <h3>Instalación</h3>
          </div>
          <div>
            <Link to="/mantenimiento">
              <button>
                <img src={mantenimiento} alt="" />
              </button>
            </Link>
            <h3>Mantenimiento</h3>
          </div>
        </div>
        <Link to="/service">
          <button> Otros servicios</button>
        </Link>
      </section>
      <section className="Contacto">
        <h2>Contáctenos</h2>
        <Link to="/contactus">
          {" "}
          <button> Formulario</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Index;
