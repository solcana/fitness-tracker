// Hal

import React, { Component } from "react";
import ExerciseInputModal from "./ExerciseInputModal";
import axios from 'axios';
import apiUrl from "./apiConfig";
import { Button } from "react-bootstrap";
import WorkoutHistoryItem from "./WorkoutHistoryItem";

class WorkoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestWorkoutId: "",
            exercises: [],
            activeWorkoutExercises: []
        };
    }

    handleAddExercise = (exercise) => {
        this.setState(prevState => ({
            activeWorkoutExercises: [...prevState.activeWorkoutExercises, exercise],
        }), () => {
            const updatedLatestWorkout = { ...this.state.latestWorkout };
            updatedLatestWorkout.exercises = this.state.activeWorkoutExercises;
            this.setState({
                latestWorkout: updatedLatestWorkout
            });
        });
    }

    handleAddWorkout = () => {
        axios
        .post(apiUrl + `/workout/`, {
          "workout":
              {
                  "exercises": []
              }
        })
        .then((response) => {
            const newWorkout = response.data.workout;
            this.setState({
                latestWorkout: newWorkout,
                latestWorkoutId: newWorkout._id,
                activeWorkoutExercises: []
            });
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

                this.setState({ latestWorkout: latestWorkout })
                this.setState({ latestWorkoutId: latestWorkoutId });
                this.setState({ activeWorkoutExercises: latestWorkoutExercises })
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

                {this.state.latestWorkout &&
                <WorkoutHistoryItem
                    workout={this.state.latestWorkout} />
                }

                {/* {this.state.activeWorkoutExercises && this.state.activeWorkoutExercises[2] && <p>Here is the ID: {this.state.activeWorkoutExercises[2]._id}</p>} */}
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
      