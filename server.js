// Require necessary NPM Packages
const express = require("express");
const mongoose = require("mongoose");
const { Workout, Exercise } = require("./models/workout");
const User = require("./models/user");
const workoutSeedData = require('./seedData/workoutSeed');
const userSeedData = require("./seedData/userSeed");

const app = express();

// Require DB Configuration File
const db = require("./config/db");

// Connect to MongoDB database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("Connection to MongoDB"));

// Require Route Files
const indexRouter = require("./routes/index");

// Routes
// Mount imported Routers
app.use(indexRouter);

const port = process.env.PORT || 5001;

// Returns a statement saying the App is listening on our specified port
app.listen(port, () => console.log(`App is listening on port ${port}`));
