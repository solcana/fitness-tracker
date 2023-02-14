// Require necessary NPM Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//Require our Auth Related packages
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// Require DB Configuration File
const db = require("./config/db");

//Require users from the database
const user = require("./seedData/userSeed");

// Connect to MongoDB database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () =>
  console.log(`Connection to MongoDB on ${db}`)
);

//Require Passport Strategy and Options
const strategy = require("./lib/passportStrategy");
const jwtOptions = require("./lib/passportOptions");

const saltRounds = 10;

// Require Route Files
const exerciseRouter = require("../server/routes/exerciseRoutes");

const indexRouter = require("../server/routes/index");

const userRouter = require("./routes/userRoutes"); //SL here***
const User = require("./models/user");

// Instantiate Express Application Object
const app = express();

// Define PORT for the API to run on
const port = process.env.PORT || 5001;
const reactPort = 3000;

//Set CORS headers on response from this API using the 'cors' NPM package
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

//Define our suth strategy from before
passport.use(strategy);

/** Middleware */

// Add `bodyParser` middleware which will parse JSON requests into JavaScript Objects before they reach the route files.
// The method `.use` sets up middleware for Express apps.
app.use(express.json());

/** Routes */
// Mount imported Routers
app.use(indexRouter);
app.use(exerciseRouter);
app.use(userRouter); //SL here ****

//temp test route
app.get("/test", (req, res) => {
  bcrypt.hash("1234", saltRounds, (error, hash) => {
    res.status(200).json({ password: hash });
  });
});

// Login Route
app.post("/api/login", (req, res) => {
	// verify that they are supplying username and password
	if (req.body.username && req.body.password) {
		// search for the user in the database
		User.findOne(
			{ username: req.body.username, password: req.body.password },
			(err, user) => {
				if (err) {
					console.log(err);
					return res.status(500).json({ error: "Server error" });
				}
				if (!user) {
					return res
						.status(401)
						.json({ error: "Invalid username or password" });
				}
				// generate and send JWT
				const payload = {
					response: "Login successful",
					// try to keep as bare minimum as possible
					// id: user.id,
				};
				const token = jwt.sign(payload, jwtOptions.secretOrKey, {
					expiresIn: 600,
				});
				res.status(200).json({ success: true, token: token });
			}
		);
	} else {
		res.status(400).json({ error: "Username & Password Required" });
	}
});

//dummy path to protect site form invalid
app.get(
  "/api/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.status(200).json({
      message: "Hey, you can see this message with the JSon Web Token.",
      user: req.user,
    });
  }
);

// Returns a statement saying the App is listening on our specified port
app.listen(port, () => console.log(`App is listening on port ${port}`));
