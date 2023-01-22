const { Router } = require("express");
const {
  getUsers,
  register,
  login,
  protected,
  logout,
  deleteAppointment,
  cita,
  recordatorio,
  getAppointment,
  getServices,
  updateCita,
  getUser,
} = require("../controllers/auth");
const { isAuth } = require("../middlewares/auth-checker");
const { userAuth } = require("../middlewares/passport-middleware");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { registerValidation, loginValidation } = require("../validators/auth");
const router = Router();

router.get("/protected", protected);
router.post("/get-users", isAuth, getUsers);
router.post("/getUser", isAuth, getUser);

router.post("/register", isAuth, registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.post("/logout", logout);

router.post("/getAppointment/:estado_cita", isAuth, getAppointment);
router.delete("/deleteAppointment/:id", isAuth, deleteAppointment);
router.post("/agendarCita", isAuth, cita);
router.post("/actualizarCita", isAuth, updateCita);
router.get("/r", recordatorio);

router.post("/getServices", isAuth, getServices);

module.exports = router;
