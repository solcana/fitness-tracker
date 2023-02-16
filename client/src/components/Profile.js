import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "../ProfilePicture.css";

class ProfilePicture extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          // backgroundColor: "hotPink",
          height: "270px",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
        className="profilePage"
      >
        <NavBar isLoggedIn={true} username={props.username} />
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Image src={this.props.src} roundedCircle />
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <h2>{this.props.username}</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <ListGroup className="list-group-flush">
                <ListGroupItem className="list-item">
                  Total Workouts: {this.props.totalWorkouts}
                </ListGroupItem>
                <ListGroupItem className="list-item">
                  Workouts this week: {this.props.workoutsThisWeek}
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ProfilePicture;
