import React from "react";

function Username() {
	const token = localStorage.getItem("token");
	const username = token ? jwt.decode(token).username : null;

	return <div>{username ? `Logged in as ${username}` : "Not logged in"}</div>;
}
export default Username;
