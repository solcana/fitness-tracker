import React, { Component } from "react";
import { Container } from "react-bootstrap";
import WorkoutContainer from "../components/WorkoutContainer";

class Workout extends Component {
    render() {
        return(
            <Container>
                <h1>Workout Page</h1>
                <WorkoutContainer />
            </Container>
        );
    }
}

export default Workout;