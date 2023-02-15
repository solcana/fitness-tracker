import React, { Component } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature,
  faDumbbell,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import apiUrl from "./apiConfig";
import axios from "axios";

class ExerciseInputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      exerciseName: "",
      exerciseWeight: "",
      exerciseReps: "",
    };
  }

  handleShow = () => {
    this.setState({ show: true });
    console.log(apiUrl + "/workout");
    axios.get(apiUrl + "/workout").then((res) => console.log(res));
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  updateName = (e) => {
    this.setState({ exerciseName: e.target.value });
  };

  updateWeight = (e) => {
    this.setState({ exerciseWeight: e.target.value });
  };

  updateReps = (e) => {
    this.setState({ exerciseReps: e.target.value });
  };

  handleAddExercise = () => {
    const exercise = {
      exerciseName: this.state.exerciseName,
      exerciseWeight: this.state.exerciseWeight,
      exerciseReps: this.state.exerciseReps,
    };

    this.props.onAddExercise(exercise);

    axios
      .post(apiUrl + `/workout/${this.props.latestWorkoutId}/exercises`, {
        exercise: {
          name: this.state.exerciseName,
          weight: this.state.exerciseWeight,
          reps: this.state.exerciseReps,
        },
      })
      //   .then((response) => {
      //     console.log(response);
      //   })
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

    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Add Exercise
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Exercise</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formExerciseName">
                <Form.Label>Exercise Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      style={{ width: "16px" }}
                    />
                  </InputGroup.Text>
                  <FormControl
                    type="name"
                    placeholder="Enter exercise name"
                    onChange={this.updateName}
                  />
                </InputGroup>
                <Form.Text className="text-muted">
                  Enter any name for your exercise.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formExerciseWeight">
                <Form.Label>Weight</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faDumbbell}
                      style={{ width: "16px" }}
                    />
                  </InputGroup.Text>
                  <FormControl
                    type="weight"
                    placeholder="Enter exercise weight (kg)"
                    onChange={this.updateWeight}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group controlId="formExerciseWeight">
                <Form.Label>Reps</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faHashtag}
                      style={{ width: "16px" }}
                    />
                  </InputGroup.Text>
                  <FormControl
                    type="reps"
                    placeholder="Enter exercise reps (#)"
                    onChange={this.updateReps}
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleAddExercise}>
              Add Exercise
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ExerciseInputModal;
