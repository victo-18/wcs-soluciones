import { useEffect, useState } from "react";
import { apiGetUsers } from "../api/api";
import _ from "lodash";
import { RiUserSearchFill } from "react-icons/ri";

const pageSize = 7;

const BusquedaCliente = ({ eventFill }) => {
  const [data, setData] = useState([]);
  const [paginatedPost, setPagination] = useState();
  const [current, setCurrent] = useState(1);
  const [value, setValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiGetUsers();
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

  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrent(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const pagPost = _(data).slice(startIndex).take(pageSize).value();
    setPagination(pagPost);
  };

  return (
    <div className="col-md-4 text-end">
      <button
        type="button"
        className="btn btn-success btn-sm "
        data-bs-toggle="modal"
        data-bs-target="#modal_Sclient"
      >
        <h6 className="">
          <RiUserSearchFill className="me-1" /> Buscar Cliente
        </h6>
      </button>
      <div className=" modal" id="modal_Sclient">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Busqueda de Cliente</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
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
                      <th scope="col">Nombres</th>
                      <th scope="col">Apellidos</th>
                      <th scope="col">Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {value.length > 0
                      ? tableFilter.map((item, i) => {
                          return (
                            <tr key={item.user_id}>
                              <td>{item.nombres}</td>
                              <td>{item.apellidos}</td>
                              <td>{item.email}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn  btn-lg btn-success"
                                  onClick={() => eventFill(item)}
                                  data-bs-dismiss="modal"
                                  name="modal_client"
                                >
                                  Seleccionar
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : paginatedPost.map((item, i) => (
                          <tr key={item.user_id}>
                            <td>{item.nombres}</td>
                            <td>{item.apellidos}</td>
                            <td>{item.email}</td>
                            <td>
                              <button
                                type="button"
                                className="btn  btn-lg btn-success"
                                onClick={() => eventFill(item)}
                                data-bs-dismiss="modal"
                                name="modal_client"
                              >
                                Seleccionar
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
                      className={
                        page === current ? "page-item active" : "page-item"
                      }
                    >
                      <p className="page-link" onClick={() => pagination(page)}>
                        {page}
                      </p>
                    </li>
                  ))}
                </ul>
              </nav>
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
  );
};

export default BusquedaCliente;
