// Hal

import React, { Component } from "react";
import ExerciseInputModal from "./ExerciseInputModal";
import ExerciseItem from "./ExerciseItem";

class WorkoutContainer extends Component {
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
}

export default WorkoutContainer;
