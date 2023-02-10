import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ExerciseInput from "../components/ExerciseInput";

class Workout extends Component {
    render() {
        return(
            <Container>
                <h3>Workout Page</h3>
                <ExerciseInput />
            </Container>
        );
    }
}

export default Workout;