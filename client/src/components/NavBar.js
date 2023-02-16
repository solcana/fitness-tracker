import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
		};
	}

	handleLogout = () => {
		// Remove the token from local storage and update the state
		localStorage.removeItem("token");
		this.setState({ isLoggedIn: false });
	};

	componentDidMount() {
		// Check if the user is already logged in
		const token = localStorage.getItem("token");
		if (token) {
			this.setState({ isLoggedIn: true });
		}
	}

	render() {
		return (
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark">
				<Container>
					<Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/profile">Profile</Nav.Link>
							<Nav.Link href="/workout">Workout</Nav.Link>
							<Nav.Link href="/graph-statistics">Graph Stats</Nav.Link>
							<Nav.Link href="/profile-picture">User Profile</Nav.Link>
							{this.state.isLoggedIn ? (
								<Nav.Link onClick={this.handleLogout}>Sign Out</Nav.Link>
							) : (
								<Nav.Link href="/user">Login</Nav.Link>
							)}
						</Nav>
						<Navbar.Text>
							Signed in as: <a href="#login">Usman's Gainz</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default NavBar;
