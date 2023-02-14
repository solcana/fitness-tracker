// Hal

import React, { Component } from "react";
import ExerciseInputModal from "./ExerciseInputModal";
import ExerciseItem from "./ExerciseItem";

class WorkoutContainer extends Component {
<<<<<<< HEAD
  render() {
    return (
      <>
        <h5>WorkoutContainer</h5>
        <ExerciseItem />
        <div className="d-flex justify-content-center">
          <ExerciseInputModal />
        </div>
      </>
    );
  }
=======
    constructor(props) {
        super(props);
        this.state = {
            exercises: []
        };
    }

    handleAddExercise = (exercise) => {
        this.setState(prevState => ({
            exercises: [...prevState.exercises, exercise]
        }));
    }

    render() { 
        return (
            <>
                <h5>WorkoutContainer</h5>
                <ExerciseItem />
                <div className="d-flex justify-content-center">
                    <ExerciseInputModal onAddExercise={this.handleAddExercise} />
                </div>
            </>
        );
    }
>>>>>>> 1ab86ab9b75c994cbd0a4ca7f4c1a57ecda530d6
}

export default WorkoutContainer;
