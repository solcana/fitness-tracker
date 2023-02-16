import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WorkoutContainer from "../components/WorkoutContainer";

class Workout extends Component {
    render() {
        return(
            <Container>
                <WorkoutContainer userID={this.props.userID}/>
            </Container>
        );
    }
}

export default Workout;