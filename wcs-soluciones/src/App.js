// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import React from "react";
import "./App.css";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
  MemoryRouter,
} from "react-router-dom";
import Admin from "./Pages/Admin";
import Home from "./Pages/Index";
import About from "./Pages/About";
import Service from "./Pages/Service";
import NavBar from "./Components/NavBar";
import Ingresa from "./Components/Login";
import AgendarCita from "./Pages/Agendar-citas";
import ContactUs from "./Pages/ContactUs";


/**rutas de las paginas de servicios en las imagenes */
import Asesor from "./Pages/servicespages/asesor";
import Diseño from "./Pages/servicespages/design";
import Instalar from "./Pages/servicespages/instalacion";
import Mantener from "./Pages/servicespages/mantenimiento";
import { useSelector } from "react-redux";
import { Loading } from "./Components/loading";
import ClientList from "./Components/customers-list";
import Register from "./Components/register";
import Appointment from "./Components/appointment";
import Logout from "./Components/Logout";
import NavBarAdmin from "./Components/navbar-admin";

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return <>{!isAuth ? <Outlet /> : <Navigate to="/admin" />}</>;
};

function App() {
  return (
    <div>
      <MemoryRouter>
        <NavBar />
        <NavBarAdmin />
        <Loading />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/citasCliente" element={<AgendarCita />} />
          <Route exact path="/contactus" element={<ContactUs />} />

          <Route element={<PrivateRoutes />}>
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/admin/customers" element={<ClientList />} />
            <Route exact path="/admin/register" element={<Register />} />
            <Route exact path="/admin/appointment" element={<Appointment />} />
            <Route exact path="/admin/logout" element={<Logout />} />
          </Route>

          <Route element={<RestrictedRoutes />}>
            <Route exact path="/login" element={<Ingresa />} />
          </Route>

          <Route exact path="/asesoria" element={<Asesor />} />
          <Route exact path="/design" element={<Diseño />} />
          <Route exact path="/instalacion" element={<Instalar />} />
          <Route exact path="/mantenimiento" element={<Mantener />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
