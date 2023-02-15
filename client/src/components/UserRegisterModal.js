import React, { Component } from "react";
import { Button, Modal, Form, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

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

	onSubmit = (e) => {
		e.preventDefault();

		const user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			username: this.state.username,
			password: this.state.password,
		};
		console.log("User: ", user);

		axios
			.post(`http://localhost:5001/api/register`, user)
			.then((response) => {
				console.log("Response:", response.data);

				// If the server responds with a successful registration, set a token in local storage
				localStorage.setItem("token", response.data.token);

				toast.success("Registration successful!", {
					autoClose: 1000,
				});
				console.log("Registration successful");
				// Redirect the user to the home page after a delay of 2 seconds
				setTimeout(() => {
					window.location = "/profile";
				}, 2000);
			})

			.catch((err) => {
				console.error("There was an Error: ", err);

				if (err.response && err.response.status === 400) {
					// Invalid input data
					toast.warning("Invalid input data", {
						autoClose: 2000,
					});
				} else {
					// Other error
					toast.error("There was an error processing your request");
				}

				this.setState({
					firstName: "",
					lastName: "",
					username: "",
					password: "",
				});
			});
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
						<Form onSubmit={this.onSubmit}>
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
