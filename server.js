// Require necessary NPM Packages
const express = require("express");
const mongoose = require("mongoose");

// Require DB Configuration File
const db = require("./config/db");

// Connect to MongoDB database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log(`Connection to MongoDB on ${db}`));

// Require Route Files
const indexRouter = require("./routes/index");

// Instantiate Express Application Object
const app = express();

// Define PORT for the API to run on
const port = process.env.PORT || 5001;

/** Middleware */
// ADD HERE

/** Routes */
// Mount imported Routers
app.use(indexRouter);


// Returns a statement saying the App is listening on our specified port
app.listen(port, () => console.log(`App is listening on port ${port}`));
