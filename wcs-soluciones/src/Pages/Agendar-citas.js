import { Fragment, useEffect, useState } from "react";
import { apiAppointment, apiGetServices } from "../api/api";

import { BsCheckCircle } from "react-icons/bs";
export default function AgendarCita() {
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
    estado_cita: "Pendiente",
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
        descripcion_cita: dataService[e.target.value].descripcion_servicio,
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
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
        tipo_servicio: "Seleccionar tipo servicio",
        fecha_servicio: "",
        descripcion_cita: "",
        telefono_cita: "",
      });
      //window.location.reload(true);
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <Fragment>
      <div className="card">
        <div className=" d-flex  card-header d-grid gap-2 d-md-flex">
          <h4 className="">Agenda tu Cita</h4>
        </div>
        <div className="d-flex card-body justify-content-center text-center">
          <form
            onSubmit={(e) => onSubmit(e)}
            className="p-3  border row  mt-6 justify-content-center"
          >
            <div className="col-md-3 m-2">
              <label htmlFor="text" className="form-label">
                Nombres
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
                Apellidos
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
                Correo Electrónico
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
                Direccion
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
                Teléfono
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
    </Fragment>
  );
}
