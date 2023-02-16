import React, { Component } from "react";
import "antd/dist/reset.css";
import { Avatar } from "antd";
// import { Container } from "react-bootstrap";
import { UserOutlined } from "@ant-design/icons";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import ProfilePicModal from "./ProfilePicModal";
import usman_pic from "../userImage/usman_pic.png";
import Coffee from "../userImage/Coffee.jpg";
import coffeeheart from "../userImage/coffeeheart.jpg";
import axios from "axios";
import apiUrl from "./apiConfig";


class ProfilePicChanger extends Component {
	constructor(props) {
		super(props);

		this.state = {
			profileImage: "",
			totalWorkouts: 0,
		};
	}

	handleImageChange = (profileImage) => {
		this.setState({
			profileImage: profileImage,
		});
	};

	componentDidMount() {
	axios.get(apiUrl + `/workout?user=${this.props.userID}`)
		.then(response => {
		const workouts = response.data.workouts;
		const totalWorkouts = workouts.length;
	
		this.setState({
			// workouts: workouts,
			totalWorkouts: totalWorkouts,
			// loading: false,
		});
		})
		.catch(error => {
		console.log(error);
		this.setState({
			// loading: false,
			error: "Failed to fetch workouts",
		});
		});
	}

	render() {
		return (
			<Container className="my-3">
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Avatar
							size={64}
							icon={<UserOutlined />}
							src={this.state.profileImage}
						/>
					</Col>
				</Row>
				{this.props.isLoggedIn && (
					<Row className="justify-content-md-center">
						<Col md="auto">
							<h3>{this.props.username}</h3>
						</Col>
					</Row>
				)}
				<Row className="justify-content-md-center">
					<Col
						md="auto"
						className="text-center">
						<ListGroup className="list-group-flush">
							<ListGroupItem className="list-item">
								Total Workouts: {this.state.totalWorkouts}
							</ListGroupItem>
							<ListGroupItem className="list-item">
								Workouts this week: 5
							</ListGroupItem>
						</ListGroup>
						<ProfilePicModal
							className="profile-modal-button"
							handleImageChange={this.handleImageChange}
							usman_pic={usman_pic}
							Coffee={Coffee}
							coffeeheart={coffeeheart}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ProfilePicChanger;
