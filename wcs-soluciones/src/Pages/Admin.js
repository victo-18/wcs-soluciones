import { Link } from "react-router-dom";
import AdminBackground2 from "../images/admin_2.svg";
import "../css/admin.css";
import "../css/animations.css";

export default function Admin() {
  return (
    <div>
      <WelcomeAdmin />
      
    </div>
  );
}

function WelcomeAdmin() {
  return (
    <div>
      <div className="position-absolute bottom-0 start-50 translate-middle-x mw-100 mh-100 w-100 img-error">
        <img
          src={AdminBackground2}
          className="slide-in-bottom"
          alt="Fondo de bienvenida"
          id="bg-welcome"
        ></img>
      </div>
      <div
        className="position-absolute top-50 start-50 translate-middle user-select-none shadow-lg text-center"
        id="text-welcome"
      >
        <span className="fs-3 d-block fw-bold">¡Bienvenido!</span>
        <hr />
        <span className="fs-4 d-block">
          Aqui tenemos algunas opciones para ti
        </span>
        <div id="link-content" className="m-3">
          <Link
            className="btn btn-success btn-lg rounded-circle"
            to="/admin/customers"
          >
            <i className="bi bi-people-fill d-block fs-3"></i>
            <span>Clientes</span>
          </Link>
          <Link
            className="btn btn-success btn-lg rounded-circle"
            to="/admin/appointment"
          >
            <i className="bi bi-calendar-check-fill d-block fs-3"></i>
            <span>Citas</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
