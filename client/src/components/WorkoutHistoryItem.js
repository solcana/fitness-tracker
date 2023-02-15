import React from "react";

class WorkoutHistoryItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
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
                    {workout.name ? workout.name : "Default Exercise Name"}
                    </Card.Title>
                    <div className="d-flex ml-auto">
                    <div className="btn" onClick={this.handleEditWorkout}>
                        <i className="fas fa-gear"></i>
                    </div>
                    <div className="btn" onClick={this.handleDeleteWorkout}>
                        <i className="fas fa-trash"></i>
                    </div>
                    </div>
                </div>
                </Card.Body>
                <ListGroup className="list-group-flush">
                {workout.exercises.map((exercise, index) => (
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