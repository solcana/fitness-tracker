import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class ExerciseHistory extends Component {
  render() {
    return (
      <div className="exerciseContainer">
        <div>{this.props.exerciseName}</div>
        <span className="weightAndReps">
          <Card border="secondary" className="weightCard">
            <div>{this.props.weight} kg</div>
          </Card>
          <Card border="secondary" className="repsCard">
            <div>{this.props.reps} reps</div>
          </Card>
        </span>
      </div>
    );
  }
}

export default ExerciseHistory;
