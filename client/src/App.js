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
			username: localStorage.getItem("username") || "",
			isLoggedIn: localStorage.getItem("isLoggedIn") || false,
			userID: localStorage.getItem("userID") || "",
		};
	}

	handleLogin = (username) => {
		this.setState({ username, isLoggedIn: true });
		localStorage.setItem("username", username);
		localStorage.setItem("isLoggedIn", true);
	};

	handleLogout = () => {
		// Remove the token from local storage and update the state
		localStorage.removeItem("token");
		this.setState({ username: "", isLoggedIn: false });
		localStorage.removeItem("username");
		localStorage.removeItem("isLoggedIn");
	};

	render() {
		const { isLoggedIn, username } = this.state;

		return (
			<>
				<NavBar
					isLoggedIn={isLoggedIn}
					username={username}
					onLogout={this.handleLogout}
				/>
				<Routes>
					{/* <Route exact path="/" element={<Login />} /> */}
					<Route
						path="/profile"
						element={
							<Profile
								username={this.state.username}
								isLoggedIn={this.state.isLoggedIn}
								userID={this.state.userID}
							/>
						}
					/>
					<Route
						path="/workout"
						element={<Workout userID={this.state.userID} />}
					/>
					<Route
						path="/graph-statistics"
						element={<GraphStatistics />}
					/>
					<Route
						path="/profile-picture"
						element={
							<ProfilePicChanger
								username={this.state.username}
								isLoggedIn={this.state.isLoggedIn}
								userID={this.state.userID}
							/>
						}
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
