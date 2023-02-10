import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ExerciseHistory from "./ExerciseHistory";

function WorkoutHistory() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>Monday Workout</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <ExerciseHistory exerciseName="Lunges" weight="15" reps="2" />
          <ExerciseHistory exerciseName="Pull ups" weight="70" reps="1" />
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

export default WorkoutHistory;
