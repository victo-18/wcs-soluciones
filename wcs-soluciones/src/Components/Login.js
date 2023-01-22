import React from "react";
import "../css/login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiLogin } from "../api/api";
import { authenticateUser } from "../api/redux/slices/authSlice";
import Cookies from "universal-cookie";
import { removeTokenDev, setTokenDev, TOKEN_AUTH } from "../api/constants";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    contrasena: "",
  });
  const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const loginChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    document.getElementById('enter-admin').classList.remove("bi-box-arrow-in-right");
    document.getElementById('enter-admin').classList.remove("bi-x-square");
    document.getElementById('enter-admin').classList.remove("d-inline");

    document.getElementById('enter-admin').classList.add("spinner-grow");
    document.getElementById('enter-admin').classList.add("text-light");

    try {
      const res = await apiLogin(values);

      document.getElementById('enter-admin').classList.remove("spinner-grow");
      document.getElementById('enter-admin').classList.remove("text-light");

      if (res.data.success) {
        document.getElementById('enter-admin').classList.add("d-inline");
        document.getElementById('enter-admin').classList.add("bi-check2-square");

        setTimeout(() => {
          const cookies = new Cookies();
          cookies.set("token", res.data.cookie, { path: "/" });

          process.env.NODE_ENV === "development" ? setTokenDev(res.data.cookie) : removeTokenDev();

          dispatch(authenticateUser());
          localStorage.setItem("isAuth", "true");
        }, 500);
      }
    } catch (error) {
      document.getElementById('enter-admin').classList.remove("spinner-grow");
      document.getElementById('enter-admin').classList.remove("text-light");

      document.getElementById('enter-admin').classList.add("d-inline");
      document.getElementById('enter-admin').classList.add("bi-x-square");

      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <div className="cardlogin text-align-center justify-content-center">
      <div className="card" style={{ width: "18rem", margin: "15px", "margin-bottom":"20rem"}}>
        <div className="card-body">
          <h5 className="card-title">Inicio de sesion</h5>
          <div className="contactus">
            <form onSubmit={(e) => loginSubmit(e)}>
              <label htmlFor="mail">Email:</label>
              <input
                type="email"
                id="mail"
                className="form-control"
                name="email"
                value={values.email}
                onChange={(e) => loginChange(e)}
              />
              <label htmlFor="password">Contaseña</label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="contrasena"
                value={values.contrasena}
                onChange={(e) => loginChange(e)}
              />
              <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
              <button type="submit" style={{ marginTop: "16px" }}>
                Iniciar sesion <div className="bi bi-box-arrow-in-right d-inline" role="status" id="enter-admin">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <div className="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
