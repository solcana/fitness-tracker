import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WorkoutContainer from "../components/WorkoutContainer";
import Card from "react-bootstrap/Card";

class Workout extends Component {
  render() {
    return (
      <div className="workoutPageContainerDiv">
        <Card body className="workoutPageContainer" border="secondary">
          <WorkoutContainer userID={this.props.userID} />
        </Card>
      </div>
    );
  }
}

export default Workout;
