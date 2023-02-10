// Hal

import React, { Component } from 'react';
import ExerciseInput from './ExerciseInput';
import ExerciseItem from './ExerciseItem';

class WorkoutContainer extends Component {
    render() { 
        return (
            <>
                <h5>WorkoutContainer</h5>
                <ExerciseInput />
                <ExerciseItem />
            </>
        );
    }
}
 
export default WorkoutContainer;