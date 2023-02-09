// Require necessary NPM Packages
const mongoose = require("mongoose");

// Require seed data files
const workoutSeedData = require('./seedData/workoutSeed');
const userSeedData = require("./seedData/userSeed");

// Require models
const { Workout, Exercise } = require("./models/workout");
const User = require("./models/user");

// Require DB Configuration File
const db = require("./config/db");

// Connect to MongoDB database
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("Connection to MongoDB");
  
    /**
     * Seed Data inserted below
     */
  
    // Adding Workout seed data to database
    Workout.insertMany(workoutSeedData, (err, workouts) => {
        if (err) {
            console.log(err);
        } else {
            console.log('added workout seed data', workouts);
        }
  
        // Adding User seed data to database
        User.insertMany(userSeedData, (err, users) => {
            if (err) {
            console.log(err);
            } else {
            console.log('added user seed data', users);
            }
    
            mongoose.connection.close();
        });
    });
});


/**
 * Testing individual entries into database
 */

// const squat = {
//     name: "Squat",
//     weight: 10,
//     reps: 10,
//   };
  
// Exercise.create(squat, (err, exercise) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added provided exercise data", exercise);
//   }
//   mongoose.connection.close();
// });
  
//   const mondayWorkout = {
//     startDate: new Date(2000, 01, 12, 14, 33, 12),
//     completed: true,
//     exercises: [],
//   };
  
//   mondayWorkout.exercises.push(squat);
  
//   const user1 = {
//     firstName: "usman",
//     lastName: "bashir",
//     username: "usbashir",
//     password: "hfghghg",
//   };
  
// User.create(user1, (err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added provided exercise data", user);
//   }
//   mongoose.connection.close();
// });

// Workout.create(mondayWorkout, (err, workout) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("added provided exercise data", workout);
//   }
//   mongoose.connection.close();
// });
  
