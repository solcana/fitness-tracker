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

	onSubmit = (e) => {
		e.preventDefault();

		const user = {
			username: this.state.username,
		};
		console.log(user);

		console.log("Username from state:", this.state.username);

		axios
			.get(`http://localhost:5001/user`)
			.then((response) => {
				// Get the user data from the response
				const users = response.data.user;

				console.log("Users:", users);
				// Find the user with the matching username
				const user = users.find(
					(user) => user.username === this.state.username
				);

				// Check if the user was found
				if (user) {
					console.log("User found:", user);
				} else {
					// username does not exist in the database
					console.log("User not found");
				}
			})
			.catch((err) => {
				console.error("Error: ", err);
			});

		this.setState({
			username: "",
		});
		// window.location = "/";
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
