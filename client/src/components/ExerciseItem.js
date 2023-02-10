// Hal

import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';

class ExerciseItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() { 
        return (
            <>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                    <div className="text-wrap">
                        <p>Workout Name</p>
                    </div>
                    <div className="text-wrap">
                        <p>Weight: xx</p>
                    </div>
                    <div className="text-wrap">
                        <p>Reps: xx</p>
                    </div>
                    <div className="d-flex ml-auto">
                        <div className="btn">
                            <i className="fas fa-pen-to-square"></i>
                        </div>
                        <div className="btn">
                            <i className="fas fa-trash"></i>
                        </div>
                        <div className="btn">
                            <i className="fas fa-check"></i>
                        </div>
                    </div>
                </ListGroupItem> 
            </>
        );
    }
}

export default ExerciseItem;