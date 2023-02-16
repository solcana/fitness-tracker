import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

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

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      console.log("Username prop updated:", this.props.username);
    }
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="NavBar"
      >
        <Container>
          <Navbar.Brand href="/profile">Fitness Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/workout">
                Workout
              </Nav.Link>
              <Nav.Link as={Link} to="/graph-statistics">
                Graph Stats
              </Nav.Link>
              <Nav.Link as={Link} to="/profile-picture">
                User Profile
              </Nav.Link>
              {this.state.isLoggedIn ? (
                <Nav.Link as={Link} to="/user" onClick={this.handleLogout}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/user">
                  Login
                </Nav.Link>
              )}
            </Nav>
            {this.state.isLoggedIn && (
              <Navbar.Text>
                Signed in as: <a href="#">{this.props.username}</a>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
