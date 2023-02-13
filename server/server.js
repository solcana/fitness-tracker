// Require necessary NPM Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Require DB Configuration File
const db = require("./config/db");

// Connect to MongoDB database
mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.once("open", () =>
	console.log(`Connection to MongoDB on ${db}`)
);

// Require Route Files
const exerciseRouter = require("../server/routes/exerciseRoutes");

const indexRouter = require("../server/routes/index");

const userRouter = require("./routes/userRoutes"); //SL here***

// Instantiate Express Application Object
const app = express();

// Define PORT for the API to run on
const port = process.env.PORT || 5001;
const reactPort = 3000;

//Set CORS headers on response from this API using the 'cors' NPM package
app.use(
	cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

/** Middleware */

// Add `bodyParser` middleware which will parse JSON requests into JavaScript Objects before they reach the route files.
// The method `.use` sets up middleware for Express apps.
app.use(express.json());

/** Routes */
// Mount imported Routers
app.use(indexRouter);
app.use(exerciseRouter);
app.use(userRouter); //SL here ****

// Returns a statement saying the App is listening on our specified port
app.listen(port, () => console.log(`App is listening on port ${port}`));
