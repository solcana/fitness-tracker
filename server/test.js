const User = require("./models/user");
const { Workout } = require("./models/workout");

const workoutId = "workoutId123";
const userId = "userId456";

User.findById(userId)
  .populate("workouts") // populate the workouts field to get the full workout document
  .exec((err, user) => {
    if (err) {
      console.error(err);
      return;
    }
    const isLinked = user.workouts.some(
      (workout) => workout._id.toString() === workoutId
    );
    console.log(
      `User ${user.username} is ${
        isLinked ? "linked to" : "not linked to"
      } workout ${workoutId}`
    );
  });
