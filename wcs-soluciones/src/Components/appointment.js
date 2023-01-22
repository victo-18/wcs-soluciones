import { Fragment, useEffect, useState } from "react";
import {
  apiAppointment,
  apiGetServices,
  apiUpdateAppointment,
  apiDelAppointment,
} from "../api/api";

import ListApointment from "./listAppoint";
import BusquedaCliente from "./buscarCliente";
import { BsCheckCircle } from "react-icons/bs";

const Appointment = () => {
  const [values, setValues] = useState({
    id_cliente: "",
    id_servicio: "",
    nombres_cliente: "",
    apellidos_cliente: "",
    email: "",
    direccion_cliente: "",
    tipo_servicio: "Seleccione tipo servicio",
    fecha_servicio: "",
    descripcion_cita: "",
    telefono_cita: "",
    estado_cita: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dataService, setDataService] = useState([]);

  const [dataButton, setDataButton] = useState({
    funcion: "Agendar",
    tipo: "btn btn-primary",
  });

  useEffect(() => {
    const fetchData = async () => {
      const serv = await apiGetServices();
      setDataService(serv.data);
    };
    fetchData();
  }, []);

  const onChange = (e) => {
    if (e.target.name === "tipo_servicio") {
      setValues({
        ...values,
        tipo_servicio: dataService[e.target.value].tipo_servicio,
        id_servicio: dataService[e.target.value].servicio_id,
      });
    } else if (e.target.name === "modal_client") {
      setValues({
        ...values,
        nombres_cliente: e.nombres,
        apellidos_cliente: e.apellidos,
        email: e.email,
        direccion_cliente: e.direccion,
        id_cliente: e.user_id,
        telefono_cita: e.telefono,
        estado_cita: "Agendada",
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    if (e.target.estado_cita === undefined) {
      setValues({ ...values, estado_cita: "Agendada" });
    }

    e.preventDefault();
    try {
      if (values.cita_id !== undefined) {
        const { data } = await apiUpdateAppointment(values);
        setError("");
        setSuccess(data.message);
        setValues({
          id_cliente: "",
          id_servicio: "",
          nombres_cliente: "",
          apellidos_cliente: "",
          email: "",
          direccion_cliente: "",
          tipo_servicio: "Seleccionar servicio",
          fecha_servicio: "",
          descripcion_cita: "",
          telefono_cita: "",
          cita_id: "",
        });
        setDataButton({
          funcion: "Agendar",
          tipo: "btn btn-primary",
        });
      } else if (values.cita_id === undefined) {
        //setValues({...values, estado_cita:'Agendada'})
        const { data } = await apiAppointment(values);
        setError("");
        setSuccess(data.message);
        setValues({
          id_cliente: "",
          id_servicio: "",
          nombres_cliente: "",
          apellidos_cliente: "",
          email: "",
          direccion_cliente: "",
          tipo_servicio: "Seleccionar servicio",
          fecha_servicio: "",
          descripcion_cita: "",
          telefono_cita: "",
        });
      }
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const handleClick = (data) => {
    // 👇️ take parameter passed from Child component
    console.log(data.estado_cita);
    let estado = "Agendada";

    if (localStorage.getItem("locale_app") === "Finalizada")
      estado = "Finalizada";
    console.log(estado);
    if (localStorage.getItem("locale_app") !== "Pendiente") {
      setDataButton({
        funcion: "Actualizar",
        tipo: "btn btn-warning",
      });
    }

    setValues({
      tipo_servicio: data.tipo_servicio,
      id_servicio: data.id_servicio,
      nombres_cliente: data.nombres_cliente,
      apellidos_cliente: data.apellidos_cliente,
      email: data.email,
      direccion_cliente: data.direccion_cliente,
      id_cliente: data.id_cliente,
      fecha_servicio: formatDate(data.fecha_servicio),
      descripcion_cita: data.descripcion_cita,
      telefono_cita: data.telefono_cita,
      cita_id: data.cita_id,
      estado_cita: estado,
    });
    window.scrollTo(0, 0);
  };

  const alerts = (e) => {
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {e}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>;
  };

  const deleteAppint = async (e) => {
    try {
      if (localStorage.getItem("locale_app") === "Pendiente") {
        let delete_app = await apiDelAppointment(e.cita_id);
      } else if (localStorage.getItem("locale_app") === "Agendada") {
        e.estado_cita = "Finalizada";
        let delete_app = await apiUpdateAppointment(e);
      }
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  const eventFill = (data) => {
    // 👇️ take parameter passed from Child component

    setValues({
      nombres_cliente: data.nombres,
      apellidos_cliente: data.apellidos,
      email: data.email,
      direccion_cliente: data.direccion,
      id_cliente: data.user_id,
      telefono_cita: data.telefono,
    });
  };

  return (
    <Fragment>
      <div className="card">
        <div className=" d-flex  card-header d-grid gap-2 d-md-flex">
          <h4 className="">Registro de Citas</h4>
          <BusquedaCliente eventFill={eventFill} />
        </div>
        <div className="d-flex card-body justify-content-center text-center">
          <form
            onSubmit={(e) => onSubmit(e)}
            className="p-3  border row  mt-6 justify-content-center"
          >
            <div className="col-md-3 m-2">
              <label htmlFor="text" className="form-label">
                Nombres Cliente
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                className="form-control"
                id="nombres"
                name="nombres_cliente"
                value={values.nombres_cliente}
                placeholder=""
                required
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="text" className="form-label">
                Apellidos Cliente
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                className="form-control"
                id="apellidos"
                name="apellidos_cliente"
                value={values.apellidos_cliente}
                placeholder=""
                required
              />
            </div>
            <div className="col-md-4 m-2">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={values.email}
                placeholder="test@gmail.com"
                required
              />
            </div>
            <div className="col-md-3 me-2">
              <label htmlFor="Address" className="form-label">
                Direccion Cliente
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="text"
                value={values.direccion_cliente}
                className="form-control"
                id="direccion_cliente"
                name="direccion_cliente"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="number" className="form-label">
                Teléfono Cliente
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="int"
                value={values.telefono_cita}
                className="form-control"
                id="telefono_cliente"
                name="telefono_cita"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-3 m-2">
              <label htmlFor="Address" className="form-label">
                Tipo Servicio
              </label>

              <select
                onChange={(e) => onChange(e)}
                type="number"
                className="form-select"
                id="telefono"
                name="tipo_servicio"
                placeholder=""
                required
              >
                <option value={-1}>{values.tipo_servicio}</option>
                {dataService.map((index, i) => (
                  <option key={index.servicio_id} value={i}>
                    {index.tipo_servicio}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="text" className="form-label">
                Fecha Servicio
              </label>
              <input
                onChange={(e) => onChange(e)}
                type="date"
                className="form-control"
                id="telefono"
                name="fecha_servicio"
                value={values.fecha_servicio}
                placeholder=""
                required
              />
            </div>

            <div className="text-start ">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label ms-2"
              >
                Descripción Cita
              </label>
            </div>
            <div>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
                onChange={(e) => onChange(e)}
                name="descripcion_cita"
                value={values.descripcion_cita}
              ></textarea>
            </div>
            <div className="text-end mt-2">
              <button type="submit" className={dataButton.tipo}>
                <BsCheckCircle className="me-1" />
                {dataButton.funcion}
              </button>
            </div>

            <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
            <div style={{ color: "green", margin: "10px 0" }}>{success}</div>
          </form>
        </div>
      </div>

      <ListApointment handleClick={handleClick} deleteAppint={deleteAppint} />
    </Fragment>
  );
};

export default Appointment;
