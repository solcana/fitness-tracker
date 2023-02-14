//Require necessary NPM Package
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
        return workout.update(req.body.workout);
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
      //If the update succeeded, return 204(no content) and no JSON
      res.status(204).end();
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

module.exports = router;
