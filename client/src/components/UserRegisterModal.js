import React, { Component } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";

class UserRegisterModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "",
			lastName: "",
			username: "",
			password: "",
		};
	}
	onChangeFirstName = (e) => {
		this.setState({
			firstName: e.target.value,
		});
		const firstName = this.state.firstName;
		console.log(firstName);
	};

	onChangeLastName = (e) => {
		this.setState({
			lastName: e.target.value,
		});
		const lastName = this.state.lastName;
		console.log(lastName);
	};

	onChangeUsername = (e) => {
		this.setState({
			username: e.target.value,
		});
		const user = this.state.username;
		console.log(user);
	};

	onChangePassword = (e) => {
		this.setState({
			password: e.target.value,
		});
		const pass = this.state.password;
		console.log(pass);
	};

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
							<Form.Group controlId="formFirstName">
								<Form.Label>First Name</Form.Label>
								<InputGroup>
									<InputGroup.Text></InputGroup.Text>
									<FormControl
										type="name"
										placeholder="First Name"
										onChange={this.onChangeFirstName}
									/>
								</InputGroup>
								<Form.Text className="text-muted">* Required</Form.Text>
							</Form.Group>
							<Form.Group controlId="formLastName">
								<Form.Label>Last Name</Form.Label>
								<InputGroup>
									<InputGroup.Text></InputGroup.Text>
									<FormControl
										type="name"
										placeholder="Last Name"
										onChange={this.onChangeLastName}
									/>
								</InputGroup>
								<Form.Text className="text-muted">* Required</Form.Text>
							</Form.Group>

							<Form.Group controlId="formUsername">
								<Form.Label>Username</Form.Label>
								<InputGroup>
									<InputGroup.Text></InputGroup.Text>
									<FormControl
										placeholder="Enter Username"
										onChange={this.onChangeUsername}
									/>
								</InputGroup>
								<Form.Text className="text-muted">* Required</Form.Text>
							</Form.Group>

							<Form.Group controlId="formPassword">
								<Form.Label>Password</Form.Label>
								<InputGroup>
									<InputGroup.Text></InputGroup.Text>
									<FormControl
										placeholder="Enter Password"
										onChange={this.onChangePassword}
									/>
								</InputGroup>
								<Form.Text className="text-muted">* Required</Form.Text>
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
