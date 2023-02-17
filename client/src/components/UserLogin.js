import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import UserRegisterModal from "./UserRegisterModal";

class UserLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			showRegisterModal: false,
		};
	}

	handleOpenModal = () => {
		this.setState({ showRegisterModal: true });
	};

	handleCloseModal = () => {
		this.setState({ showRegisterModal: false });
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
		console.log("password: ", pass);
	};

	onSubmit = (e) => {
		e.preventDefault();

		const user = {
			username: this.state.username,
			password: this.state.password,
		};
		console.log("User: ", user);

		axios
			.post(`http://localhost:5001/api/login`, user)
			.then((response) => {
				console.log("Response:", response.data);
				console.log("UserLogin: ", user.username);

				// If the server responds with a successful login, set a token in local storage
				localStorage.setItem("token", response.data.token);

				localStorage.setItem("userID", response.data.user._id);

				// Call the onLogin function to update the username state in the parent component
				this.props.onLogin(user.username);

				toast.success("Login successful!", {
					autoClose: 1000,
				});
				console.log("Successfully logged in");
				// Redirect the user to the home page after a delay of 2 seconds
				setTimeout(() => {
					window.location = "/profile";
				}, 2000);
			})

			.catch((err) => {
				console.error("There was an Error: ", err);

				if (err.response && err.response.status === 401) {
					// Incorrect username or password
					toast.error("Incorrect username or password", {
						autoClose: 2000,
					});
				} else if (err.response && err.response.status === 400) {
					// Username field is required
					toast.warning("Username and password is required", {
						autoClose: 2000,
					});
				} else {
					// Other error
					toast.error("There was an error processing your request");
				}

				this.setState({
					username: "",
					password: "",
				});
			});
	};

	render() {
		return (
			<Container style={{ width: "400px" }}>
				<h3>User Login</h3>
				<ToastContainer />
				<Form onSubmit={this.onSubmit}>
					<Form.Group
						className="mb-3"
						controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter username"
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
						<Form.Text className="text-muted">
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group
						className="mb-3"
						controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.onChangePassword}
						/>
					</Form.Group>
					<div
						style={{
							display: "flex",
							justifyContent: "left",
							marginTop: "1rem",
						}}>
						<Form.Group
							className="mb-3"
							controlId="formBasicCheckbox">
							<Form.Check
								type="checkbox"
								label="Check me out"
							/>
						</Form.Group>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							marginTop: "1rem",
						}}>
						<Button
							className="submit-button"
							variant="primary"
							type="submit"
							style={{ marginRight: "10px" }}>
							Submit
						</Button>
						<Button
							className="submit-button"
							variant="primary"
							onClick={this.handleOpenModal}>
							Register
						</Button>
					</div>
				</Form>
				<UserRegisterModal
					showRegisterModal={this.state.showRegisterModal}
					handleClose={this.handleCloseModal}
				/>
			</Container>
		);
	}
}

export default UserLogin;
