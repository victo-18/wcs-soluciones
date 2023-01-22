import { useEffect, useState } from "react";
import { apiGetAppointment } from "../api/api";
import _ from "lodash";
import ModalClient from "./modalClient";
import { FaEdit } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
// import { AiOutlineConsoleSql } from "react-icons/ai";
import "../css/buttons.css";
import { AiFillPushpin } from "react-icons/ai";

const pageSize = 7;
let funcion = "";
let tipo = "";
let funcionS = "Editar";
let tipoS = "btn btn-warning";
let icono;
const ListApointment = ({ handleClick, deleteAppint }) => {
  let app;

  /**
    * const [dataButtonThree,setDataButtonThr] = useState({
      funcion: '',
      tipo: ''
   });
    */

  if (localStorage.getItem("locale_app") === null) {
    app = "todas";
    funcion = "Eliminar";
    tipo = "btn btn-danger";
  } else if (localStorage.getItem("locale_app") === "Agendada") {
    app = localStorage.getItem("locale_app");
    funcion = "Finalizar";
    tipo = "btn btn-secondary";
  } else if (localStorage.getItem("locale_app") === "todas") {
    app = localStorage.getItem("locale_app");
    funcion = "Eliminar";
    tipo = "btn btn-danger";
  } else if (localStorage.getItem("locale_app") === "Pendiente") {
    app = localStorage.getItem("locale_app");
    funcion = "Eliminar";
    tipo = "btn btn-danger";
    funcionS = "Agendar";
    tipoS = "btn btn-warning";
    icono = <AiFillPushpin />;
  } else if (localStorage.getItem("locale_app") === "Finalizada") {
    app = localStorage.getItem("locale_app");
    funcion = "Eliminar";
    tipo = "btn btn-danger";
    funcionS = "Editar";
    tipoS = "btn btn-warning";
  }

  const [data, setData] = useState([]);
  const [paginatedPost, setPagination] = useState();
  const [current, setCurrent] = useState(1);
  const [value, setValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);

  let tipoIcono = (e) => {
    let icon = "";
    if (e.estado_cita === "Pendiente") {
      icon = "bi bi-clock-fill text-success";
    } else if (e.estado_cita === "Agendada") {
      icon = "bi bi-pin-angle-fill text-success";
    } else if (e.estado_cita === "Finalizada") {
      icon = "bi bi-check-square-fill text-success";
    }

    return icon;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiGetAppointment(app);
      setData(res.data);
      setPagination(_(res.data).slice(0).take(pageSize).value());
    };
    fetchData();
  }, []);

  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;

  const filterData = (e) => {
    if (e.target.value !== "") {
      setValue(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else if (e.target.value === "/") {
      setValue(e.target.value);
      const filterTable = data.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setData([...data]);
    }
  };

  //if(pageCount === 1 ) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrent(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const pagPost = _(data).slice(startIndex).take(pageSize).value();
    setPagination(pagPost);
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
  const tipoCita = (e) => {
    localStorage.setItem("locale_app", e);
    // window.location.reload(true);
  };

  return (
    <div className="card m3">
      <div className="table-responsive border m-3 card-body app">
        <div className="card-head ">
          <h5 className="d-flex">Citas</h5>
          <div className="m-2 text-end">
            <button
              className="m-2 btn buttons_app_todos"
              onClick={() => tipoCita("todas")}
            >
              Todas
            </button>
            <button
              className="m-2 btn buttons_app_pendientes"
              onClick={() => tipoCita("Pendiente")}
            >
              Pendientes
            </button>
            <button
              className="m-2 btn buttons_app_agendadas"
              onClick={() => tipoCita("Agendada")}
            >
              Agendadas
            </button>
            <button
              className="m-2 btn buttons_app_finalizadas"
              onClick={() => tipoCita("Finalizada")}
            >
              Finalizadas
            </button>
          </div>
        </div>
        <div className="input-group mb-3 table-responsive">
          <span className="input-group-text" id="basic-addon1">
            Buscar
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={value}
            onChange={filterData}
          />
        </div>
        {!paginatedPost ? (
          "Datos no encontrados"
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Estado</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Direccion</th>
                <th scope="col">Tipo Servicio</th>
                <th scope="col">Fecha Servicio</th>
                <th scope="col">Descripción</th>
                <th scope="col">Editar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {value.length > 0
                ? tableFilter.map((appo, index) => {
                  return (
                    <tr key={appo.cita_id}>
                      <td>
                        <p className={tipoIcono(appo)}></p>
                      </td>
                      <td>{appo.nombres_cliente} </td>
                      <td>{appo.apellidos_cliente}</td>
                      <td>{appo.direccion_cliente}</td>
                      <td>{appo.tipo_servicio}</td>
                      <td>{formatDate(appo.fecha_servicio)}</td>
                      <td>
                        <ModalClient props={appo} />
                      </td>
                      <td>
                        <button
                          type="button"
                          className={tipoS}
                          value={"editar"}
                          onClick={() => handleClick(appo)}
                        >
                          <FaEdit className="me-1" />
                          {funcionS}
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className={tipo}
                          onClick={() => deleteAppint(appo)}
                        >
                          <IoIosRemoveCircle className="me-1" />
                          {funcion}
                        </button>
                      </td>
                    </tr>
                  );
                })
                : paginatedPost.map((appo, index) => (
                  <tr>
                    <td>
                      <p className={tipoIcono(appo)}></p>
                    </td>
                    <td>{appo.nombres_cliente}</td>
                    <td>{appo.apellidos_cliente}</td>
                    <td>{appo.direccion_cliente}</td>
                    <td>{appo.tipo_servicio}</td>
                    <td>{formatDate(appo.fecha_servicio)}</td>
                    <td>
                      <ModalClient props={appo} />
                    </td>
                    <td>
                      <button
                        type="button"
                        className={tipoS}
                        value={"editar"}
                        onClick={() => handleClick(appo)}
                      >
                        <FaEdit className="me-1" />
                        {funcionS}
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className={tipo}
                        onClick={() => deleteAppint(appo)}
                      >
                        <IoIosRemoveCircle className="me-1" />
                        {funcion}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        <nav className="d-felx justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={page === current ? "page-item active" : "page-item"}
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListApointment;
