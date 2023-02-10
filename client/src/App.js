import React, { Component } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Exercise from './components/Exercise';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <NavBar />
            <Exercise />
            <h1>Hello</h1>
            </>
        );
    }
}
 
export default App;