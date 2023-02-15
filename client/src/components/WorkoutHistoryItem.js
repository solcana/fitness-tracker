import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ExerciseHistory from "./ExerciseHistory";
import WorkoutEditModal from "./WorkoutEditModal";

class WorkoutHistoryItem extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <>
            <Card style={{ width: "100%" }} border="primary">
                <Card.Body>
                <div
                    style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    }}
                >
                    <Card.Title style={{ textAlign: "left" }}>
                    {this.props.workout.name ? this.props.workout.name : "Default Exercise Name"}
                    </Card.Title>
                    <div className="d-flex ml-auto">
                        <WorkoutEditModal workout={this.props.workout}/>
                    {/* <div className="btn" onClick={this.props.handleEditWorkout}>
                        <i className="fas fa-gear"></i>
                    </div> */}
                    <div className="btn" onClick={() => this.props.handleDeleteWorkout(this.props.workout._id)}>
                        <i className="fas fa-trash"></i>
                    </div>
                    </div>
                </div>
                </Card.Body>
                <ListGroup className="list-group-flush">
                {this.props.workout.exercises.map((exercise, index) => (
                    <ListGroup.Item key={index}>
                    <ExerciseHistory
                        exerciseName={exercise.name}
                        weight={exercise.weight}
                        reps={exercise.reps}
                    />
                    </ListGroup.Item>
                ))}
                </ListGroup>
            </Card>
            </>
         );
    }
}
 
export default WorkoutHistoryItem;