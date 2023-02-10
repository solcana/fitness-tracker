import React, { Component } from 'react';
import { InputGroup } from "react-bootstrap";


class Exercise extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <h4>Exercise</h4>
                <InputGroup>
                    <div className="input-group-text bg-primary">
                        <i className="fa-solid fa-dumbbell text-white"/>
                    </div>
                    <div>
                        <p>Weight:</p>
                    </div>
                    <input
                        type="text"
                        className="form-control" />
                    <div>
                        <p>Reps:</p>
                    </div>
                    <input
                        type="text"
                        className="form-control" />
                    <button type="submit" className="btn btn-primary">Add item</button>
                </InputGroup>
            </>
        );
    }
}

export default Exercise;