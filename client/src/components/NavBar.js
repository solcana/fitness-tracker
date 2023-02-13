import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
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
						<Nav.Link href="/user">Login</Nav.Link>
					</Nav>
					<Navbar.Text>
						Signed in as: <a href="#login">Usman's Gainz</a>
					</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
