import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ExerciseHistory from "./ExerciseHistory";

export class WorkoutHistory extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }} border="primary">
        <Card.Body>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <i className="fa-solid fa-gear"></i>
            <i
              className="fa-solid fa-delete-left"
              style={{ marginLeft: "10px" }}
            ></i>
            <Card.Title style={{ marginLeft: "auto" }}>
              Monday Workout
            </Card.Title>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <ExerciseHistory exerciseName="Lunges" weight="15" reps="2" />
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Title>Tuesday Workout</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <ExerciseHistory exerciseName="Squat" weight="20" reps="2" />
            <ExerciseHistory exerciseName="Push ups" weight="100" reps="1" />
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  }
}

export default WorkoutHistory;
