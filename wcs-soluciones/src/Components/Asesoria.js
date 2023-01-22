import React from "react";
import asesoria1 from "../images/asesoria1.jpg";
import asesoria2 from "../images/asesoria2.jpg";
import asesoria3 from "../images/asesoria3.jpg";
import asesoria4 from "../images/asesoria4.jpg";
import "../css/asesoria.css";
import { Link } from "react-router-dom";

export default function Asesoria() {
  return (
    <div className="asesoria">
      <div className="row">
        <label id="titulo" htmlFor="text">
          <h5>Asesorias</h5>
        </label>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img src={asesoria1} className="card-img-top" alt="" />

              <img src={asesoria2} className="card-img-top" alt="" />

              <img src={asesoria3} className="card-img-top" alt="" />

              <img src={asesoria4} className="card-img-top" alt="" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Contamos con experiencia en diseño, instalación de sistemas de
                irigación, mantenimiento de sistemas de riego de jardines
                residenciales, fincas, canchas de futbol, canchas de golf.
                Nuestra experiencia nos permite proponer e implementar
                diferentes sistemas de riego. Contamos con los conocimientos
                tecnicos para realizar proyectos e instalaciones de riego
                agricola ya sea por goteo, micro asperción o por asperción entre
                otros sistemas.
              </p>
              <Link to="/" className="btn btn-warning">
                Atras
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
