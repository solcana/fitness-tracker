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
            exercises: []
        };
    }

    handleAddExercise = (exercise) => {
        this.setState(prevState => ({
            exercises: [...prevState.exercises, exercise]
        }));
    }

    componentDidMount = () => {
        // Get all workouts and select ID as last entry in database             // MAYBE CHANGE LATER TO BE LATEST CreatedAt DATE?
        axios.get(apiUrl + "/workout")
            .then(response => {
                const latestWorkoutId = response.data.workouts[response.data.workouts.length - 1]._id;
                this.setState({ latestWorkoutId: latestWorkoutId });
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
