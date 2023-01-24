import React from "react";
import servicios3 from "../images/servicios3.jpg";
import mantenimiento1 from "../images/mantenimiento1.jpg";
import mantenimiento2 from "../images/mantenimiento2.jpg";
import mantenimiento3 from "../images/mantenimiento3.jpg";
import "../css/asesoriamantenimiento.css";
import { Link } from "react-router-dom";

export default function Asesoriamantenimiento() {
  return (
    <div className="contenedormantenimiento">
      <h5 className="card-title">MANTENIMIENTO</h5>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img src={servicios3} className="card-img-top"     alt="imagen mantenimiento" />
              <img src={mantenimiento1} className="card-img-top" alt="imagen mantenimiento" />
              <img src={mantenimiento2} className="card-img-top" alt="imagen mantenimiento" />
              <img src={mantenimiento3} className="card-img-top" alt="imagen mantenimiento" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Realizamos mantenimiento revisando y haciendo ajustes,
                limpiezas, re-programando el controlador, ajustando el sensor de
                lluvia, etc. ​Una vez terminado el mantenimiento procedemos a
                comprobar el correcto funcionamiento del sistema de riego con el
                fin de garantizar la calidad de nuestro trabajo y el correcto
                funcionamiento del sistema intervenido.
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
