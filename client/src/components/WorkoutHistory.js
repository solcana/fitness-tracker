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

  handleEditWorkout = (updatedWorkout) => {
    console.log("Updated workout: ", updatedWorkout);

    const updatedWorkouts = this.state.workouts.map((workout) => {
      console.log(workout);
      if (workout._id === updatedWorkout._id) {
        return updatedWorkout;
      } else {
        return workout;
      }
    });

    this.setState({ workouts: updatedWorkouts });
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
