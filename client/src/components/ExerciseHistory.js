import React, { Component } from "react";

export class ExerciseHistory extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 12 }}>{this.props.exerciseName}</div>
        <div style={{ flex: 1 }}>{this.props.weight} kg</div>
        <div style={{ flex: 1 }}>{this.props.reps} reps</div>
      </div>
    );
  }
}

export default ExerciseHistory;
