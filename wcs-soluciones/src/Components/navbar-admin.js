import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "../css/navbar.css";

export default function NavBarAdmin() {
  let path = useLocation().pathname;
  if (path.includes("admin"))
    return (
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#006600" }}
      >
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            <img src={logo} alt="Logo WCS"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i
              className="bi bi-list"
              style={{ color: "#fff", fontSize: "xx-large" }}
            ></i>
          </button>
          <div
            className="offcanvas offcanvas-end"
            style={{ backgroundColor: "#006600" }}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                style={{ color: "#fff", fontSize: "xx-large" }}
                id="offcanvasNavbarLabel"
              >
                Menu
              </h5>
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#006600", color: "#fff" }}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link
                  className="nav-item nav-link active"
                  aria-current="page"
                  to="/"
                >
                  <i className="bi bi-house-door-fill me-1"></i>
                  Inicio
                </Link>
                <Link className="nav-item nav-link" to="/admin/customers">
                  <i className="bi bi-people-fill me-1"></i>
                  Clientes
                </Link>
                <Link className="nav-item nav-link" to="/admin/appointment">
                  <BsFillCalendarCheckFill className="me-1" />
                  Citas
                </Link>
                <Link className="nav-item nav-link" to="/admin/register">
                  <BsFillPersonPlusFill className="me-1" />
                  Registo Cliente
                </Link>
                <Link className="nav-item nav-link" to="/admin/logout">
                  <RiLogoutBoxRLine className="me-1" />
                  Cerrar Sesión
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}
