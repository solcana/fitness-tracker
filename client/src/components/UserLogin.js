import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

class UserLogin extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
		};
	}

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
				// If the server responds with a successful login, set a token in local storage
				// localStorage.setItem("token", response.data.token);
				console.log("Successfully logged in");
				// <prompt message="Login Successful" />;
				// Redirect the user to the home page
				// window.location = "/profile";
			})

			.catch((err) => {
				console.error("Error: ", err);
			});

		this.setState({
			username: "",
			password: "",
		});
	};

	render() {
		return (
			<Container style={{ width: "400px" }}>
				<h3>User Login</h3>
				<Form onSubmit={this.onSubmit}>
					<Form.Group
						className="mb-3"
						controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter username"
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
							type="submit">
							Register
						</Button>
					</div>
				</Form>
			</Container>
		);
	}
}

export default UserLogin;
