const { check } = require("express-validator");
const db = require("../db");
const { compare } = require("bcryptjs");

//contraseña
const contrasena = check("contrasena")
  .isLength({ min: 6, max: 15 })
  .withMessage("Por favor ingresa una contraseña de 6 a 15 caracteres");

//email
const email = check("email")
  .isEmail()
  .withMessage("Por favor escribe un email");

//verificar si el email existe
const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query(
    "SELECT * from registro_usuario WHERE email = $1",
    [value]
  );

  if (rows.length) {
    throw new Error("El correo ingresado ya está en uso");
  }
});

//Validación de login

const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * from login_admin WHERE email = $1", [
    value,
  ]);
  if (!user.rows.length) {
    throw new Error("No se ha encontrado el correo electrónico");
  }
  const validPassword = await compare(
    req.body.contrasena,
    user.rows[0].contrasena
  );

  //req.body.contrasena !== user.rows[0].contrasena
  if (!validPassword) {
    throw new Error("La contraseña ingresada es incorrecta");
  }

  req.user = user.rows[0];
});

module.exports = {
  registerValidation: [email, emailExists],
  loginValidation: [loginFieldsCheck],
};
