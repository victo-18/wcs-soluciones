import { showLoading, hideLoading } from "./loading";
import { useEffect, useState } from "react";
import { apiGetUsers } from "../api/api";
import "../css/customers.css";
import "../css/animations.css";
import imageError from "../images/error_1.svg";
import imageError2 from "../images/error_2.svg";
import UnAuth from "./UnAuth";

function showSpinner(animate) {
  if (animate) {
    let element = document.getElementById("reload-btn");
    element.classList.remove("bi-arrow-clockwise");
    element.classList.add("bi-arrow-repeat");
    element.classList.add("rotate-center");
  }
}

function hideSpinner(animate) {
  if (animate) {
    setTimeout(() => {
      let element = document.getElementById("reload-btn");

      if (element && element.classList.contains("bi-arrow-repeat")) {
        element.classList.remove("bi-arrow-repeat");
        element.classList.remove("rotate-center");
        element.classList.add("bi-arrow-clockwise");
      }
    }, 1500);
  }
}

async function getUsers(callback, animate = false) {
  showSpinner(animate);

  let data = await apiGetUsers();
  if (data.data.length === 0) data = { data: [{ empty: true }] }

  callback(data.data);
}

const ClientList = () => {
  showLoading();
  let [data, setData] = useState([]);
  if (data.length == 0) getUsers(setData);
  console.log(data);
  if (data.length > 0 || data.code) {
    if (data.code === undefined) {
      return (
        <div className="container text-center mt-2 mb-2" id="customers-list">

          {data[0].empty != undefined ? (
            emptyList()
          ) : (
            data.map((value, index) => (
              itemList(data, value, index)
            ))
          )}

          <InfoCustomer />

          <div className="position-absolute bottom-0 end-0" id="reload-customers">
            <button className="rounded-circle" onClick={() => { getUsers(setData, true) }}>
              <span class="bi bi-arrow-clockwise" id="reload-btn"></span>
            </button>
          </div>

          {hideLoading()}
          {hideSpinner(true)}
        </div>
      );
    }
    else {
      if (data.code == "ERR_BAD_REQUEST") {
        hideLoading(true);
        return <UnAuth />
      } else {
        hideLoading();
        return (
          <div id="error-message">
            <BackGroundError />
            <div id="error-text" className="position-absolute top-50 start-50 translate-middle shadow-lg rounded"            >
              <span className="fs-3 d-block fw-bold">Se ha producido un error</span>
              <hr />
              <span className="fs-5">{setMessage(data.code)}</span>
              <span className="mt-3 font-monospace text-muted d-block">
                CODE:{data.code}
              </span>
            </div>
          </div>
        );
      }
    }
  }
};

function BackGroundError() {
  return (
    <div className="position-absolute bottom-0 start-50 translate-middle-x mw-100 mh-100 w-75 img-error">
      <img className="bg-img-error" src={imageError} alt="Error"></img>
      <img className="bg-img-error" src={imageError2} alt="Error"></img>
    </div>
  );
}

function Avatar(cap) {
  return <div className="rounded-circle avatar ml-4">{cap.charAt(0).toUpperCase()}</div>;
}

function setMessage(code) {
  switch (code) {
    case "ECONNREFUSED":
      return `No se ha podido conectar a la base de datos.`;
    case "ERR_NETWORK":
      return `No se ha podido conectar al servidor.`;
    case "ERR_BAD_REQUEST":
      return `Al parecer no tienes permisos suficientes. Por favor cierra la sesion e inicia la nuevamente.`;
    default:
      return `No se ha podido determinar el error.`;
  }
}

function emptyList() {
  return (
    <div>
      <BackGroundError />
      <div id="error-text" className="position-absolute top-50 start-50 translate-middle shadow-lg rounded">
        <span className="fs-5 fw-bold user-select-none">
          No hay clientes disponibles...
        </span>
      </div>
    </div>
  )
}

function itemList(data, value, index) {
  return (
    <div onClick={() => { showCustomerInfo(value.user_id) }} key={value.user_id}
      className={`border-secondary border ${index === (data.length - 1) ? "" : "border-bottom-0"
        } rounded-top client-contact`}
    >
      <div className="row">
        <div className="col ml">
          {Avatar(`${value.nombres}`)}
        </div>
        <div className="col">
          <span>{`${value.nombres} ${value.apellidos}`}</span>
        </div>
        <div className="col">
          <span>
            <span className="text-muted">{value.direccion}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

function InfoCustomer() {
  return (
    <div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Información</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div>
                <div className="row">
                  <div className="col">
                    {Avatar("Usuario")}
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    Usuario
                  </div>
                </div>
                <div className="row w-100 bg-theme">
                  <div className="col-md-auto p-3 bg-theme text-white">
                    <i class="bi bi-whatsapp me-1 d-block"></i>Enviar mensaje
                  </div>
                  <div className="col-md-auto p-3 bg-theme text-white">
                    <i class="bi bi-envelope me-1 d-block"></i>Enviar correo
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    Informacion de contacto:
                  </div>
                  <div className="col">
                    Telefono:
                  </div>
                  <div className="col">
                    Correo:
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    Direccion:
                  </div>
                  <div className="col">
                    Telefono:
                  </div>
                  <div className="col">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

function showCustomerInfo(user_id) {
  console.log("Working with " + user_id);
}

export default ClientList;
