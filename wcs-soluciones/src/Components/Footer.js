import React, { Component } from "react";
import "../css/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="w-100 mw-100">
        <div className="footers">
          <div className="d-flex">
            <div className="infoempresa">
              <div className="datosempresa">
                <span>WCS Soluciones en Riego</span>

                <span>Teléfono: (+57) 313 770 5999</span>

                <span>Email: wcssolucionesenriego@gmail.com</span>
                <span>Dirección: Cra. 45 # 53-11</span>
                <span>Cali, Valle del Cauca</span>
              </div>
            </div>
            <div className="redessociales">
              <a
                href="https://www.facebook.com/WCS-Soluciones-en-Riego-1512205902328859"
                className="fb"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook "></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC5udBdYknJxo00VBsLp-1pA/UC8OtO9ASy4lo1FrPZazk1-A/about"
                className="ytb"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-youtube"></i>
              </a>
              <a
                href="https://web.whatsapp.com/"
                className="wsp"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://twitter.com/wcsriego?t=c8MZaE_gDBRNTgep60gGOg"
                className="twt"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
