// Hal

import React, { Component } from "react";
import ExerciseInputModal from "./ExerciseInputModal";
import ExerciseItem from "./ExerciseItem";
import axios from 'axios';
import apiUrl from "./apiConfig";

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
      