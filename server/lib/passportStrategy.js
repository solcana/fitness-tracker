//Passport Package
const passportJWT = require("passport-jwt");

//Passport Options
const jwtOptions = require("./passportOptions");

//Require user
const user = require("../seedData/userSeed");

//JSON Web Token Strategy object that we will be using
const JwtStrategy = passportJWT.Strategy;

//set up a funtion where we are going to see if the requesting user
//has a valid jwt or not. And to see if the token is expired.

//new instance
const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
	console.log("Payload Recieved!");
	console.log("User ID:", jwtPayload.id);
	console.log("Token Expires On:", jwtPayload.exp);

	//Example real life db call:
	//User.findById(jwtPayLoad.id)
	if (user[0].id === jwtPayload.id) {
		console.log("User authenticated successfully - passStrat");
		//If ID is in the database, then lets run our original route
		next(null, user);
	} else {
		console.log("User authentication failed - passStrat");
		//If ID does not match, then skip our target route and return a 401
		next(null, false);
	}
});

module.exports = strategy;
