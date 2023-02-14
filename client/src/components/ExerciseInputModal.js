import React, { Component } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileSignature,
  faDumbbell,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

class ExerciseInputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
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
                  <FormControl type="name" placeholder="Enter exercise name" />
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
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Add Exercise
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ExerciseInputModal;
