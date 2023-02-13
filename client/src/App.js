import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./pages/Profile";
import { Route, Routes } from "react-router-dom";
import Workout from "./pages/Workout";
import GraphStatistics from "./components/GraphStatistics";
import ProfilePicChanger from "./components/ProfilePicChanger";
import UserLogin from "./components/UserLogin";

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
					<Route
						path="/graph-statistics"
						element={<GraphStatistics />}
					/>
					<Route
						path="/profile-picture"
						element={<ProfilePicChanger />}
					/>
					<Route
						path="/user"
						element={<UserLogin />}
					/>
				</Routes>
			</>
		);
	}
}

export default App;
