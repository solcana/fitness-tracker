// Hal

import React, { Component } from "react";
import ExerciseInputModal from "./ExerciseInputModal";
import ExerciseItem from "./ExerciseItem";
import axios from 'axios';
import apiUrl from "./apiConfig";
import { Button } from "react-bootstrap";

class WorkoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestWorkoutId: "",
            exercises: [],
            workoutExercises: []
        };
    }

    handleAddExercise = (exercise) => {
        this.setState(prevState => ({
            workoutExercises: [...prevState.workoutExercises, exercise]
        }));
    }

    handleAddWorkout = () => {
        console.log("Add Workout");

        axios
        .post(apiUrl + `/workout/`, {
          "workout":
              {
                  "exercises": []
              }
        })
        .catch((error) => {
          if (error.response) {
            //response status is an error code
            console.log(error.response.status);
          } else if (error.request) {
            //response not received though the request was sent
            console.log(error.request);
          } else {
            //an error occurred when setting up the request
            console.log(error.message);
          }
        });
    }

    componentDidMount = () => {
        // Get all workouts and select ID as last entry in database             // MAYBE CHANGE LATER TO BE LATEST CreatedAt DATE?
        axios.get(apiUrl + "/workout")
            .then(response => {
                const latestWorkout = response.data.workouts[response.data.workouts.length - 1];

                const latestWorkoutExercises = latestWorkout.exercises
                const latestWorkoutId = latestWorkout._id;

                this.setState({ latestWorkoutId: latestWorkoutId });
                this.setState({ workoutExercises: latestWorkoutExercises })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() { 
        return (
            <>
                <h5>WorkoutContainer</h5>
                <div className="d-flex justify-content-center">
                    <Button onClick={this.handleAddWorkout}>Start New Workout</Button>
                </div>

                <ExerciseItem />
                
                {this.state.workoutExercises && this.state.workoutExercises[2] && <p>Here is the ID: {this.state.workoutExercises[2]._id}</p>}
                <div className="d-flex justify-content-center">
                    <ExerciseInputModal
                        onAddExercise={this.handleAddExercise}
                        latestWorkoutId={this.state.latestWorkoutId} />
                </div>
            </>
        );
    }
}

export default WorkoutContainer;
      