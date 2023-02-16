// Hal

import React, { Component } from "react";
import ExerciseInputModal from "./ExerciseInputModal";
import axios from "axios";
import apiUrl from "./apiConfig";
import { Button } from "react-bootstrap";
import WorkoutHistoryItem from "./WorkoutHistoryItem";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

class WorkoutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latestWorkoutId: "",
      exercises: [],
      activeWorkoutExercises: [],
      showTimer: false,
    };
  }

  handleAddExercise = (exercise) => {
    this.setState(
      (prevState) => ({
        activeWorkoutExercises: [...prevState.activeWorkoutExercises, exercise],
        showTimer: true, // Set showTimer to true when a new exercise is added
      }),
      () => {
        const updatedLatestWorkout = { ...this.state.latestWorkout };
        updatedLatestWorkout.exercises = this.state.activeWorkoutExercises;
        this.setState({
          latestWorkout: updatedLatestWorkout,
        });
      }
    );
  };

  handleAddWorkout = () => {
    axios
      .post(apiUrl + `/workout/`, {
        workout: {
          exercises: [],
          user: this.props.userID,
        },
      })
      .then((response) => {
        const newWorkout = response.data.workout;
        this.setState({
          latestWorkout: newWorkout,
          latestWorkoutId: newWorkout._id,
          activeWorkoutExercises: [],
        });
      })
      .catch((error) => {
        if (error.response) {
          //response status is an error code
          console.log(error.response.status);
        } else if (error.request) {
          //response not received though the request was sent
          console.log(error.request);
        } else {
          //an error occurred when setting up the request
          console.log(error.message);
        }
      });
  };

  onTimerComplete = () => {
    this.setState({ showTimer: false });
    toast("Get back to work! \uD83D\uDCAA", {
      autoClose: 3000,
    });
  };

  componentDidMount = () => {
    // Get all workouts and select ID as last entry in database             // MAYBE CHANGE LATER TO BE LATEST CreatedAt DATE?
    axios
      .get(apiUrl + "/workout")
      .then((response) => {
        const latestWorkout =
          response.data.workouts[response.data.workouts.length - 1];

        const latestWorkoutExercises = latestWorkout.exercises;
        const latestWorkoutId = latestWorkout._id;

        this.setState({ latestWorkout: latestWorkout });
        this.setState({ latestWorkoutId: latestWorkoutId });
        this.setState({ activeWorkoutExercises: latestWorkoutExercises });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <ToastContainer />

        <div className="d-flex justify-content-center">
          <Button onClick={this.handleAddWorkout}>Start New Workout</Button>
        </div>

        {this.state.latestWorkout && (
          <WorkoutHistoryItem workout={this.state.latestWorkout} />
        )}

        {/* {this.state.activeWorkoutExercises && this.state.activeWorkoutExercises[2] && <p>Here is the ID: {this.state.activeWorkoutExercises[2]._id}</p>} */}
        <div className="d-flex justify-content-center">
          <ExerciseInputModal
            onAddExercise={this.handleAddExercise}
            latestWorkoutId={this.state.latestWorkoutId}
          />
        </div>

        <div className="d-flex justify-content-center">
          {this.state.showTimer && ( // Show the countdown timer when showTimer is true
            <CountdownCircleTimer
              isPlaying
              duration={7}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[7, 5, 2, 0]}
              onComplete={this.onTimerComplete}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          )}
        </div>
      </>
    );
  }
}

export default WorkoutContainer;
