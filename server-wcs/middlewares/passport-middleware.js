const passport = require("passport");
const { Strategy } = require("passport-jwt");
const { SECRET } = require("../constants");
const db = require("../db");

const cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) token = req.cookies["token"];
  return token;
};

const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
};

passport.use(
  new Strategy(opts, async ({ id }, done) => {
    try {
      const { rows } = await db.query("SELECT email FROM login_admin", [id]);
      if (!rows.length) {
        throw new Error("401 Not authorized");
      }
      let user = { email: rows[0].email };
      return done(null, user);
    } catch (error) {
      console.log(error.message);
      done(null, false);
    }
  })
);

exports.userAuth = passport.authenticate("jwt", {
  session: false,
  expireIn: "1hr",
});
