import React, { Component } from "react";
import { Container } from "react-bootstrap";
import HistoryContainer from "../components/HistoryContainer";

class Profile extends Component {
  render() {
    return (
      <div className="workoutPageContainerDiv">
        <Container>
          <h3>Profile Page</h3>
          <HistoryContainer userID={this.props.userID} />
        </Container>
      </div>
    );
  }
}

export default Profile;
