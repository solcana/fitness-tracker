const mongoose = require("mongoose");
const exerciseSchema = require("./exercise");

const workoutSchema = new mongoose.Schema(
  {
    startDate: { type: Date, required: true },
    completed: { type: Boolean, default: false },
    exercises: [exerciseSchema],
  },
  { timestamps: true }
);

// Compile our Model based on the Schema
const Workout = mongoose.model("Workout", workoutSchema);

// Export our Model for use
module.exports = Workout;
