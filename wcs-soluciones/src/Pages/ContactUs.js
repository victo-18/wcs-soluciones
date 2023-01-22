import React from "react";
import Footer from "../Components/Footer";

import "../css/Contactus.css";

function ContactUs() {
  return (
    <div className="Contactus mw-100 mh-100 h-100">
      <div className="contenedorcontaus w-100 mw-100 container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="container_text">
                  <h5 className="card-title">
                    <h5>Contactenos:</h5>
                  </h5>
                  <p>
                    Para WCS soluciones en riego es un gusto poder servirte, por
                    eso ponemos a tu disposición todos nuestros canales
                    digitales donde puedes ponerte en contacto con notros, no
                    dudes en hacerlo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container_card_info d-flex">
              <div>
                <h6>Información de contacto</h6>
                <div>
                  <i className="bi bi-envelope-fill"></i>
                  <p>wcssolucionesenriego@gmail.com</p>
                </div>
                <div>
                  <i className="bi bi-facebook"></i>
                  <p>WCS Soluciones en Riego</p>
                </div>
                <div>
                  <i className="bi bi-twitter"></i>
                  <p>WCS Soluciones en Riego</p>
                </div>
                <div>
                  <i className="bi bi-whatsapp"></i>
                  <p>(+57) 321 818 6659</p>
                </div>
                <div>
                  <i className="bi bi-phone-fill"></i>
                  <p>(+57) 313 770 5999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ContactUs;
