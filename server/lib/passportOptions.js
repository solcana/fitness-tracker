const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {};

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "FT_SECRET_KEY"; //USUALLY PUT IN .ENV FILE

module.exports = jwtOptions;
