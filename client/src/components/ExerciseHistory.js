import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export class ExerciseHistory extends Component {
  render() {
    return (
      <div className="exerciseContainer">
        <div>{this.props.exerciseName}</div>
        <span className="weightAndReps">
          <Badge bg="primary" className="badge">
            <div>{this.props.weight} kg</div>
          </Badge>
          <Badge bg="primary" className="badge">
            <div>{this.props.reps} reps</div>
          </Badge>
          <div
            className="btn"
            onClick={() =>
              this.props.handleDeleteExercise(
                this.props.exercise._id,
                this.props.workoutID
              )
            }
          >
            <i className="fas fa-trash"></i>
          </div>
        </span>
      </div>
    );
  }
}

export default ExerciseHistory;
