import React from "react";
import logo from "../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import "../css/navbar.css";

export default function NavBar() {
  let path = useLocation().pathname;

  if (!path.includes("admin"))
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
                <Link className="nav-item nav-link" to="/">
                  Inicio
                </Link>
                <Link className="nav-item nav-link" to="/about">
                  Nosotros
                </Link>
                <Link className="nav-item nav-link" to="/service">
                  Servicios
                </Link>
                <Link className="nav-item nav-link" to="/citasCliente">
                  Agenda tu cita
                </Link>
                <Link className="nav-item nav-link" to="/contactus">
                  Contacto
                </Link>
                <Link className="nav-item nav-link" to="/login">
                  Ingresa
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}