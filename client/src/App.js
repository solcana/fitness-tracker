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
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			isLoggedIn: false,
		};
	}

	handleLogin = (username) => {
		this.setState({ username });
	};

	handleLogout = () => {
		// Remove the token from local storage and update the state
		localStorage.removeItem("token");
		this.setState({ username: "", isLoggedIn: false });
	};

	render() {
		return (
			<>
				<NavBar
					username={this.state.username}
					isLoggedIn={this.state.isLoggedIn}
					onLogout={this.handleLogout}
				/>
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
						element={
							<UserLogin
								onLogin={this.handleLogin}
								onLogout={this.handleLogout}
							/>
						}
					/>
				</Routes>
			</>
		);
	}
}

export default App;
