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
    const confirmDelete = window.confirm("Are you sure you want to delete this workout?");
    if(confirmDelete) {
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
  }

  handleEditWorkout = (updatedWorkout) => {
    console.log("Updated workout: ",  updatedWorkout);

    const updatedWorkouts = this.state.workouts.map((workout) => {
      console.log(workout);
      if (workout._id === updatedWorkout._id) {
        return updatedWorkout;
      } else {
        return workout;
      }
    });

    this.setState({ workouts: updatedWorkouts });
  }

  handleDeleteExercise = (exerciseID, workoutID) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this exercise?");
    if(confirmDelete) {
      axios
        .delete(apiUrl + "/workout/" + workoutID + "/exercises/" + exerciseID)
        .then((response) => {
          // Filter the exercises for the workout that was modified
          const updatedExercises = this.state.workouts
            .find((workout) => workout._id === workoutID)
            .exercises.filter((exercise) => exercise._id !== exerciseID);
            
          const updatedWorkouts = [...this.state.workouts];
  
          // Find the index of the workout that was modified and update the exercises array for the modified workout
          const workoutIndex = updatedWorkouts.findIndex((workout) => workout._id === workoutID);
          updatedWorkouts[workoutIndex].exercises = updatedExercises;
  
          this.setState({ workouts: updatedWorkouts });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const workoutList = this.state.workouts.map((workout, index) => {
      return (
        <div key={index}>
          <WorkoutHistoryItem 
            workout={workout} 
            handleDeleteWorkout={this.handleDeleteWorkout}
            handleEditWorkout={this.handleEditWorkout}
            handleDeleteExercise={this.handleDeleteExercise} />
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
