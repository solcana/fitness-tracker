// Require necessary NPM Packages
const express = require("express");
const mongoose = require("mongoose");
const { Workout, Exercise } = require("./models/workout");

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

const squat = {
  name: "Squat",
  weight: 10,
  reps: 10,
};

// Exercise.create(squat, (err, exercise) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added provided exercise data", exercise);
//   }
//   mongoose.connection.close();
// });

const mondayWorkout = {
  startDate: Date.now(),
  completed: true,
  exercises: [],
};

mondayWorkout.exercises.push(squat);

Workout.create(mondayWorkout, (err, workout) => {
  if (err) {
    console.log(err);
  } else {
    console.log("added provided exercise data", workout);
  }
  mongoose.connection.close();
});

// Returns a statement saying the App is listening on our specified port
app.listen(port, () => console.log(`App is listening on port ${port}`));
