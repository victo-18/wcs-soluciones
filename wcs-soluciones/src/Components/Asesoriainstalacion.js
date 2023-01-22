import React from "react";
import instalacion from "../images/instalacion.jpg";
import instalacion2 from "../images/instalacion2.jpg";
import instalacion3 from "../images/instalacion3.jpg";
import instalacion4 from "../images/instalacion4.jpg";
import "../css/instalacion.css";
import { Link } from "react-router-dom";

export default function Asesoriainstalacion() {
  return (
    <div className="contenedorinstalacion">
      <h5 className="card-title">INSTALACION</h5>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img src={instalacion} className="card-img-top" alt="..." />
              <img src={instalacion2} className="card-img-top" alt="..." />
              <img src={instalacion3} className="card-img-top" alt="..." />
              <img src={instalacion4} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Instalación y mantenimiento de sistemas de riego: Riego por
                goteo Cali Valle Aspersión Cali, Valle Micro aspersión Cali,
                Valle Nebulización Cali, Valle Riego automático Cali, Valle
                Fertirrigacion Cali, Valle Riego en invernaderos Cali, Valle
                Otros servicios Diseño e instalación de acueductos veredales
                Cali, Valle, Instalación y mantenimiento de tanque de
                almacenamiento. Climatización de espacios exteriores (riegos).
                Sistemas de bombeo
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
