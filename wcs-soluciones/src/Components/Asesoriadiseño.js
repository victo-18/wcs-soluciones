import React from "react";
import servicios2 from "../images/servicios2.jpg";
import diseño1 from "../images/diseño1.jpg";
import diseño2 from "../images/diseño2.jpg";
import diseño3 from "../images/diseño3.jpg";
import "../css/asesoriadiseño.css";
import { Link } from "react-router-dom";

export default function Asesoriadiseño() {
  return (
    <div className="asesoriadiseño">
      <h5 className="card-title">DISEÑO</h5>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <img src={servicios2} className="card-img-top" alt="imagen asesoria" />
              <img src={diseño1} className="card-img-top"    alt="imagen asesoria" />
              <img src={diseño3} className="card-img-top"    alt="imagen asesoria" />
              <img src={diseño2} className="card-img-top"    alt="imagen asesoria" />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text">
                Diseñamos su sistema de riego de acuerdo a las necesidades de la
                explotación agrícola. En cada proyecto trabajamos con las marcas
                más importantes del mercado optimizando al máximo nuestro
                trabajo. Ofrecemos servicio de instalación de riego en zonas
                agrícolas, residenciales y comerciales, riego automático con
                aspersores tipo pop-up, controladores, electro válvulas y
                sensores de lluvia. Estos se realizan en casas campestres,
                condominios, campos de fútbol, fincas, invernaderos, jardines
                verticales.
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
