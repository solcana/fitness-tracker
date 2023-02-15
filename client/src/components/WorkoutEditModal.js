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

class WorkoutEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      workoutName: "",
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
    this.setState({ workoutName: e.target.value });
  };

  handleEditWorkout = () => {
    console.log("Editing workout");
    axios
      .patch(apiUrl + `/workout/${this.props.workout._id}`, {
        "workout":
            {
                "name": this.state.workoutName
            }
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
        <div className="btn">
            <i className="fas fa-gear" onClick={this.handleShow}></i>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Workout</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formWorkoutName">
                <Form.Label>Workout Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      style={{ width: "16px" }}
                    />
                  </InputGroup.Text>
                  <FormControl
                    type="name"
                    placeholder="Enter workout name"
                    onChange={this.updateName}
                  />
                </InputGroup>
                <Form.Text className="text-muted">
                  Enter any name for your workout.
                </Form.Text>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleEditWorkout}>
              Confirm Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default WorkoutEditModal;
