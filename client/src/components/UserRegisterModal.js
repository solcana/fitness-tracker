import React, { Component } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFileSignature,
	faDumbbell,
	faHashtag,
} from "@fortawesome/free-solid-svg-icons";

class UserRegisterModal extends Component {
	handleClose = (e) => {
		this.props.handleClose();
	};

	showModal = (e) => {
		this.setState({ showRegisterModal: true });
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({ showRegisterModal: false });
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({ showRegisterModal: false });
	};

	render() {
		return (
			<>
				<Modal
					show={this.props.showRegisterModal}
					onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Register</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form>
							<Form.Group controlId="formFullName">
								<Form.Label>Name</Form.Label>
								<InputGroup>
									<InputGroup.Text></InputGroup.Text>
									<FormControl
										type="name"
										placeholder="Name"
										// onChange={this.updateName}
									/>
								</InputGroup>
								<Form.Text className="text-muted">Name</Form.Text>
							</Form.Group>

							<Form.Group controlId="formUsername">
								<Form.Label>Username</Form.Label>
								<InputGroup>
									<InputGroup.Text></InputGroup.Text>
									<FormControl
										placeholder="Enter Username"
										// onChange={this.updateWeight}
									/>
								</InputGroup>
							</Form.Group>

							<Form.Group controlId="formPassword">
								<Form.Label>Password</Form.Label>
								<InputGroup>
									<InputGroup.Text></InputGroup.Text>
									<FormControl
										placeholder="Enter Password"
										// onChange={this.updateReps}
									/>
								</InputGroup>
							</Form.Group>
						</Form>
					</Modal.Body>

					<Modal.Footer>
						<Button
							variant="secondary"
							onClick={this.handleClose}>
							Close
						</Button>
						<Button
							// onClick={this.handleAddExercise}
							variant="primary">
							Register
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default UserRegisterModal;
