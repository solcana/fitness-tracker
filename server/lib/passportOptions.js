const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
require("dotenv").config();

const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.FT_SECRET_KEY;

module.exports = jwtOptions;
