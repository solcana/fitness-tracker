import React, { Component } from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <NavBar />
            <h1>Hello</h1>
            </>
        );
    }
}
 
export default App;