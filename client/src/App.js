import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Workout from "./pages/Workout";

import ProfilePicture from "./components/ProfilePicture";
import usman_pic from "./userImage/usman_pic.png";

class App extends Component {
	state = {};
	render() {
		return (
			<>
				<NavBar />
				<Routes>
					{/* <Route exact path="/" element={<Login />} /> */}
					<Route
						path="/profile"
						element={<Profile />}
					/>
					<Route
						path="/workout"
						element={<Workout />}
					/>
				</Routes>
				<ProfilePicture
					src={usman_pic}
					alt="Usman"
					username="Us-Dawg"
					totalWorkouts={1000}
					workoutsThisWeek={5}
				/>
			</>
		);
	}
}

export default App;
