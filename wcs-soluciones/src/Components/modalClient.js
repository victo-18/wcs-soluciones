// import React, { Fragment, useState, useEffect, useReducer } from "react";
// import { apiUpdateAppointment } from "../api/api";
import { MdDescription } from "react-icons/md";
import { ImPhone, ImMail4 } from "react-icons/im";
import { AiFillSchedule } from "react-icons/ai";
import { AiFillEnvironment } from "react-icons/ai";
import { Fragment } from "react";

const ModalClient = ({ props }) => {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target={`#id${props.cita_id}`}
      >
        <MdDescription /> ver
      </button>

      <div className="modal" id={`id${props.cita_id}`}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-success text-white">
              <h5 className="modal-title me-4">ID: {props.cita_id}</h5>
              <h4 className="modal-title ms-4">Descripción Cita</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body card">
              <div className="list-group list-group-flush">
                <div className="list-group-item">
                  <label className="me-4">
                    <b>Nombre Cliente:</b>
                  </label>
                  <label className="me-4">{props.nombres_cliente}</label>
                  <label className="ml-4">{props.apellidos_cliente}</label>
                </div>
                <div className="list-group-item">
                  <label className="me-4">
                    <b>Contacto:</b>
                  </label>
                  <label className="ms-5 me-4">
                    <ImPhone className="me-1 " />
                    {props.telefono_cita}
                  </label>
                  <label className="ml-4">
                    <ImMail4 className="me-1 success" />
                    {props.email}
                  </label>
                </div>

                <div className="list-group-item">
                  <label className="me-4">
                    <b>Información:</b>
                  </label>
                  <label className="ms-4">
                    <AiFillSchedule className="me-1" />
                    {formatDate(props.fecha_servicio)}
                  </label>
                  <label className="ms-4">
                    <AiFillEnvironment className="me-1" />
                    {props.direccion_cliente}
                  </label>
                </div>
                <div className="list-group-item">
                  <label className="mb-3">
                    <b>Descripción</b>
                  </label>
                  <p className="border rounded-2 p-3 fs-6">
                    {props.descripcion_cita}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalClient;
