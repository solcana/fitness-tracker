//Require necessary NPM Package
const { request } = require("express");
const express = require("express");

//Require Mongoose Model for Workout
const { Workout, Exercise } = require("../models/workout");

//Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:         INDEX
 * Method:         HTTP GET method
 * URI:            /api/workout
 * Description:    Get All workouts (what the route is going to do)
 */
router.get("/api/workout", (req, res) => {
  // Get the user id from the query parameter
  const userId = req.query.user;

  if (userId) {
    // Use the workout model imported above to find workouts with the given user id
    Workout.find({ user: userId })
      // Return matching workouts as an array
      .then((workouts) => {
        res.status(200).json({ workouts: workouts });
      })
      // Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  } else {
    //use the workout model imported above
    Workout.find()
      //return all articles as an array
      .then((workouts) => {
        res.status(200).json({ workouts: workouts });
      })
      //Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
});

/**
 * Action:         SHOW
 * Method:         HTTP GET method
 * URI:            /api/workout/5d664b8b68b4bjdbjdbj
 * Description:    Get an individual workout by workout ID
 */
router.get("/api/workout/:id", (req, res) => {
  //use the workout model imported above
  Workout.findById(req.params.id)
    //return a workout as an array
    .then((workout) => {
      if (workout) {
        res.status(200).json({ workout: workout });
      } else {
        //If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided ID doesn't match any documnets",
          },
        });
      }
    })
    //Catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

/**
 * Action:         DESTROY
 * Method:         HTTP DELETE method
 * URI:            /api/workout/5d664b8b68b4bjdbjdbj
 * Description:    Delete a workout by workout ID
 */
router.delete("/api/workout/:id", (req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => {
      if (workout) {
        //Pass the result of Mongoose's .remove method to the next promise on the '.then' chain
        return workout.remove();
      } else {
        //If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided ID doesn't match any documnets",
          },
        });
      }
    })
    .then(() => {
      //If the deletion succeeded, return 204 and no JSON
      res.status(204).end();
    })
    // catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

/**
 * Action:         UPDATE
 * Method:         PATCH/PUT
 * URI:            /api/workout/5d664b8b68b4bjdbjdbj
 * Description:    Update a workout by workout ID
 */
router.patch("/api/workout/:id", (req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => {
      if (workout) {
        //Pass the result of Mongooses `.update` method to the next `.then` on the promise chain
        return workout.updateOne(req.body.workout);
      } else {
        //If we couldn't find a document with the matching ID
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided ID doesn't match any documents",
          },
        });
      }
    })
    .then(() => {
      // Retrieve the updated workout object from the database
      return Workout.findById(req.params.id);
    })
    .then((updatedWorkout) => {
      // Return the updated workout object in the response
      res.json({ workout: updatedWorkout });
    })
    // catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

/**
 * Action:         CREATE
 * Method:         POST
 * URI:            /api/workout
 * Description:    Create a new workout
 */
router.post("/api/workout", (req, res) => {
  Workout.create(req.body.workout)
    // On a successful `create` action. respond with 201
    //HTTP status and the content of the new workout
    .then((newWorkout) => {
      res.status(201).json({ workout: newWorkout });
    })
    // catch any errors that might occur
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

/**
 * Action:         INDEX
 * Method:         HTTP GET method
 * URI:            /api/workout/workoutID/exercises
 * Description:    Get All exercises of a specific workout (what the route is going to do)
 */

router.get("/api/workout/:id/exercises", (req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => {
      if (!workout) {
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided workout ID doesn't match any documents",
          },
        });
      } else {
        console.log("Exercises found:", workout.exercises);
        res.status(200).json({ exercises: workout.exercises });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

/**
 * Action:         CREATE
 * Method:         POST
 * URI:            /api/workout/:id/exercises
 * Description:    Create a new exercise for a given workout
 */
router.post("/api/workout/:id/exercises", (req, res) => {
  Workout.findById(req.params.id)
    .then((workout) => {
      if (workout) {
        const exerciseData = req.body.exercise;
        workout.exercises.push(exerciseData);
        return workout.save();
      } else {
        res.status(404).json({
          error: {
            name: "DocumentNotFoundError",
            message: "The provided ID doesn't match any documents",
          },
        });
      }
    })
    .then((updatedWorkout) => {
      res.status(200).json({ workout: updatedWorkout });
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

/**
 * Action:         DELETE
 * Method:         DELETE HTTP
 * URI:            /api/workout/:id/exercises/:id
 * Description:    Delete an exercise for a given workout
 */

router.delete("/api/workout/:id/exercises/:exerciseId", async (req, res) => {
  try {
    const { id, exerciseId } = req.params;
    const workout = await Workout.findById(id);
    if (!workout) throw new Error("Workout not found");
    const deleteExercise = workout.exercises.id(exerciseId);
    if (!deleteExercise) throw new Error("Exercise not found");
    await deleteExercise.remove();
    await workout.save();
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: err.message });
  }
});

/**
 * Action:         UPDATE
 * Method:         UPDATE HTTP
 * URI:            /api/workout/:id/exercises/:id
 * Description:    Update an exercise for a given workout
 */

//  This route handles PUT requests to update an exercise in a workout by workout ID and exercise ID.
router.put("/api/workout/:id/exercises/:exerciseId", async (req, res) => {
  try {
    // Extract the workout ID and exercise ID from the request parameters.
    const { id, exerciseId } = req.params;
    // Find the workout with the specified ID in the database.
    const workout = await Workout.findById(id);
    // If the workout doesn't exist, throw an error with a message.
    if (!workout) throw new Error("Workout not found");
    // Get the exercise to update from the workout using its ID.
    const updateExercise = workout.exercises.id(exerciseId);
    // If the exercise doesn't exist in the workout, throw an error with a message.
    if (!updateExercise) throw new Error("Exercise not found");
    // Update the exercise properties with the values from the request body.
    updateExercise.set(req.body);
    // Save the changes to the database.
    await workout.save();
    // Return a JSON response with the updated exercise.
    return res.json(updateExercise);
  } catch (err) {
    // If an error occurs, log the error to the console and return a 404 Not Found status with a JSON response containing the error message.
    console.log(err);
    return res.status(404).json({ message: err.message });
  }
});

module.exports = router;
