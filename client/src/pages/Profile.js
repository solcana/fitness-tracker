import React, { Component } from "react";
import { Container } from "react-bootstrap";
import HistoryContainer from "../components/HistoryContainer";
import ProfilePicChanger from "../components/ProfilePicChanger";

class Profile extends Component {
  render() {
    return (
      <Container>
        <ProfilePicChanger 
          username={this.props.username}
          isLoggedIn={this.props.isLoggedIn}
          userID={this.props.userID} />
        <HistoryContainer userID={this.props.userID} />
      </Container>
    );
  }
}

export default Profile;
