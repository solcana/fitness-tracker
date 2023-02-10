import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Exercise from "../components/Exercise";

class Workout extends Component {
    render() {
        return(
            <Container>
                <h3>Workout Page</h3>
                <Exercise />
            </Container>
        );
    }
}

export default Workout;