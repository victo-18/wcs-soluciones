import { Fragment, useState } from "react";
import { onRegistration } from "../api/api";

const Register = () => {
  const [values, setValues] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    contrasena: "",
    telefono: "",
    direccion: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await onRegistration(values);

      setError("");
      setSuccess(data.message);
      setValues({
        nombres: "",
        apellidos: "",
        email: "",
        contrasena: "",
        telefono: "",
        direccion: "",
      });

      // window.location.reload(true);
    } catch (error) {
      setError(error.response.data.errors[0].msg);
      setSuccess("");
    }
  };

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)} className="container mt-3">
        <h1>Registro de Clientes</h1>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Nombres
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="nombres"
            name="nombres"
            value={values.nombres}
            placeholder=""
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Apellidos
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            value={values.apellidos}
            placeholder=""
            required
          />
        </div>

        <div className="mb-3">
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

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Direccion
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={values.direccion}
            placeholder=""
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Telefono
          </label>
          <input
            onChange={(e) => onChange(e)}
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={values.telefono}
            placeholder=""
            required
          />
        </div>

        <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
        <div style={{ color: "green", margin: "10px 0" }}>{success}</div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default Register;
