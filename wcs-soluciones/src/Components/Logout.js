import { apiLogout } from "../api/api";
import { useDispatch } from "react-redux";
import { unauthenticateUser } from "../api/redux/slices/authSlice";
import AdminBackground2 from "../images/admin_2.svg";
import "../css/admin.css";
import Cookies from "universal-cookie";

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <div style={{ zIndex: 9998 }}>
      <div className="position-absolute bottom-0 start-50 translate-middle-x mw-100 mh-100 w-100 img-error">
        <img
          src={AdminBackground2}
          className=""
          alt="Fondo de bienvenida"
          id="bg-welcome"
        ></img>
      </div>
      <div
        className="position-absolute top-50 start-50 translate-middle user-select-none shadow-lg text-center"
        id="text-welcome"
      >
        <span className="fs-3 d-block fw-bold">¡Hasta luego!</span>
        <hr />
        <span className="fs-4 d-block">Estamos cerrando tu sesion..</span>
        <div className="spinner-grow text-success mt-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <span className="visually-hidden">
        {setTimeout(async () => {
          try {
            apiLogout();
            dispatch(unauthenticateUser());

            while (localStorage.getItem("isAuth") != null) {
              localStorage.removeItem("isAuth");
            }

            const cookies = new Cookies();
            while (cookies.get("token") != null) {
              cookies.remove("token");
            }

          } catch (error) {
            console.log(error.response);
          }
        }, 1500)}
      </span>
      <div
        className="w-100 h-100 d-block position-absolute top-0"
        style={{ zIndex: 9999 }}
        id="block-interact"
      ></div>
    </div>
  );
}

// const Logout = () => {
//   console.log(useLocation().pathname);
//   const dispatch = useDispatch();

//   try {
//     apiLogout();
//     dispatch(unauthenticateUser());
//     localStorage.removeItem("isAuth");
//   } catch (error) {
//     console.log(error.response);
//   }
// };
