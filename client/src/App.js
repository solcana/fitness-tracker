import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Workout from "./pages/Workout";
import GraphStatistics from "./components/GraphStatistics";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      </>
    );
  }
}

export default App;
