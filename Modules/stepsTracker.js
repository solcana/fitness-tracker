const express = require('express');
const router = express.Router();
const Step = require('../models/Step');

// Route to create a new step entry
router.post('/', (req, res) => {
  const step = new Step({
    steps: req.body.steps,
    distance: req.body.distance,
    date: req.body.date
  });
  step.save()
    .then(data => res.json(data))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Route to retrieve all step entries
router.get('/', (req, res) => {
  Step.find()
    .then(steps => res.json(steps))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


/**
 * This code creates a new step entry by using the POST method.
 * Then saves it to the database using the save() method. 
 * The GET method retrieves all step entries using the find() method.
 */