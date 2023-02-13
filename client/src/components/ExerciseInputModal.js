import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

class ExerciseInputModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
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
                <Form.Control type="name" placeholder="Enter exercise name" />
                <Form.Text className="text-muted">
                    Enter any name for your exercise.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formExerciseWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="weight" placeholder="Enter exercise weight (kg)" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Reps</Form.Label>
                <Form.Control type="reps" placeholder="Enter exercise repetitions (#)" />
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