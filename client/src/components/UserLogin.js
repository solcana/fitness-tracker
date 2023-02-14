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
	};

	onSubmit = (e) => {
		e.preventDefault();

		const user = {
			username: this.state.username,
		};
		console.log(user);

		console.log("Username from state:", this.state.username);
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
