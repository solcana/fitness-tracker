import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ExerciseHistory from "./ExerciseHistory";
import apiUrl from "./apiConfig";
import axios from "axios";

export class WorkoutHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/api/workout")
      .then((response) => {
        console.log(response.data);
        this.setState({ workouts: response.data.workouts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  apiTest = () => {
    console.log(apiUrl + "/workout");
  };

  //   render() {
  //     return (
  //       <Card style={{ width: "100%" }} border="primary">
  //         <Card.Body>
  //           <div
  //             style={{
  //               width: "100%",
  //               display: "flex",
  //               justifyContent: "flex-end",
  //               alignItems: "center",
  //             }}
  //           >
  //             <i className="fa-solid fa-gear"></i>
  //             <i
  //               className="fa-solid fa-delete-left"
  //               style={{ marginLeft: "10px" }}
  //             ></i>
  //             <Card.Title style={{ marginLeft: "auto" }}>
  //               Monday Workout
  //             </Card.Title>
  //           </div>
  //         </Card.Body>
  //         <ListGroup className="list-group-flush">
  //           <ListGroup.Item>
  //             <ExerciseHistory exerciseName="Lunges" weight="15" reps="2" />
  //           </ListGroup.Item>
  //         </ListGroup>
  //         <button onClick={this.apiTest}>Show Workouts</button>
  //       </Card>
  //     );
  //   }
  // }

  render() {
    const workoutList = this.state.workouts.map((workout, index) => {
      return (
        <div key={index}>
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
                  {workout.name}
                </Card.Title>
              </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {workout.exercises.map((exercise, index) => (
                <ListGroup.Item key={index}>
                  <ExerciseHistory
                    exerciseName={exercise.name}
                    weight={exercise.weight}
                    reps={exercise.reps}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
      );
    });

    return (
      <div>
        {workoutList}
        <button onClick={this.apiTest}>Show Workouts</button>
      </div>
    );
  }
}

export default WorkoutHistory;
