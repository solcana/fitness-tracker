import React, { Component } from "react";
import { Container } from "react-bootstrap";
import HistoryContainer from "../components/HistoryContainer";

class Profile extends Component {
  render() {
    return (
      <Container>
        <h3>Profile Page</h3>
        <HistoryContainer userID={this.props.userID}/>
      </Container>
    );
  }
}

export default Profile;
