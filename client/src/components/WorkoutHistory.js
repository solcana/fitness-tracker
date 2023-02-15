import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ExerciseHistory from "./ExerciseHistory";
import apiUrl from "./apiConfig";
import axios from "axios";
import WorkoutHistoryItem from "./WorkoutHistoryItem";

export class WorkoutHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
      showEditModal: false,
      workoutToEdit: null,
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

  handleEditWorkout = (workout) => {
    console.log("Edit Workout");
    this.setState({ showEditModal: true, workoutToEdit: workout });
  };

  handleDeleteWorkout = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workout?"
    );
    if (confirmDelete) {
      axios
        .delete(apiUrl + "/workout/" + id)
        .then((response) => {
          const updatedWorkouts = this.state.workouts.filter(
            (workout) => workout._id !== id
          );
          this.setState({ workouts: updatedWorkouts });
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      console.log(workout);
      return (
        <div key={index}>
          <WorkoutHistoryItem
            workout={workout}
            handleDeleteWorkout={this.handleDeleteWorkout}
            handleEditWorkout={this.handleEditWorkout}
          />
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
