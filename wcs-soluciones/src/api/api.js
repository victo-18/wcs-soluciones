import axios from "axios";
import Cookies from "universal-cookie";
import SERVER_URL, { TOKEN_AUTH } from "./constants";
axios.defaults.withCredentials = true;

let url = SERVER_URL || "https://server-wcs.herokuapp.com";

export async function onRegistration(registrationData) {
  return await axios.post(
    `${url}/register`,
    getToken(registrationData)
  );
}

export async function apiLogin(loginData) {
  return await axios.post(`${url}/login`, loginData);
}

export async function apiAppointment(appointmentData) {
  return await axios.post(
    `${url}/agendarCita`,
    appointmentData
  );
}

export async function apiUpdateAppointment(appointmentUpdate) {
  return await axios.post(
    `${url}/actualizarCita`,
    appointmentUpdate
  );
}

export async function apiLogout() {
  try {
    return await axios.post(
      `${url}/logout`,
      getToken({})
    );
  } catch (error) {
    console.warn(error);
  }
}

export async function fetchProtectedInfo() {
  return await axios.get(`${url}/protected`);
}

export async function apiGetAppointment(estado_cita) {
  return await axios.post(
    `${url}/getAppointment/${estado_cita}`,
    getToken({})
  );
}

export async function apiDelAppointment(cita_id) {
  return await axios.delete(
    `${url}/deleteAppointment/${cita_id}`
  );
}

export async function apiGetUsers() {
  try {
    return await axios.post(
      `${url}/get-users`,
      getToken({})
    );
  } catch (error) {
    console.log(error);
    return { data: { code: error.code, message: error.message } };
  }
}

export async function apiGetServices() {
  return await axios.post(`${url}/getServices`, getToken({}));
}

export async function apiGetUser(id) {
  return await axios.post(`${url}/getUser`, getToken({ id: id }));
}

function getToken(obj) {
  let tokenAuth = TOKEN_AUTH || new Cookies().get("token");
  // console.log(tokenAuth);
  return { token: tokenAuth, ...obj };
}