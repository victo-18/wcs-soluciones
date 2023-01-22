const db = require("../db");

const authTokens = {};
loadAuthTokens();

async function loadAuthTokens() {
  let result = await db.query("SELECT token, ip FROM log_admin WHERE is_valid = $1", [true]);

  for (let i in result.rows) {
    let values = Object.values(result.rows[i]);
    authTokens[values[0]] = { ip: values[1] };
  }

  console.log(authTokens);
}

exports.Authorize = (authToken, ip, username) => {
  // authTokens[authToken] = { ip: ip };
  authTokens[authToken] = { ip: ip || "NONE" };
  db.query("INSERT INTO log_admin(token, username, ip, is_valid) VALUES($1, $2, $3, $4)", [authToken, username, ip || "NONE", true])
};

exports.UnAuthorize = (req) => {
  const authToken = req.body["token"];
  const ip = req.headers["x-forwarded-for"] || "NONE";
  delete authTokens[authToken];
  db.query("UPDATE log_admin SET is_valid = false WHERE token = $1 and ip = $2", [authToken, ip || "NONE"])
};

exports.isAuth = (req, res, next) => {
  const request_token = req.body["token"];
  const request_ip = req.headers["x-forwarded-for"] || "NONE";
  const authorizedToken = authTokens[request_token];

  if (authorizedToken && authorizedToken.ip == request_ip) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// exports.isAuth = (req) => {
//   const request_token = req.body["token"];
//   const request_ip = req.headers["x-forwarded-for"];

//   const authorizedToken = authTokens[request_token];

//   if (authorizedToken && authorizedToken.ip == request_ip) {
//     return true;
//   } else {
//     return false;
//   }
// };
