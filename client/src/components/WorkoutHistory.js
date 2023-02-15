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
<<<<<<< HEAD
    this.setState({ showEditModal: true, workoutToEdit: workout });
  };
=======
    // this.setState({ showEditModal: true, workoutToEdit: workout });
  }
>>>>>>> fe8ac484fba35a5c18c9eaf7b7d8a82f09608a36

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

  render() {
    const workoutList = this.state.workouts.map((workout, index) => {
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
