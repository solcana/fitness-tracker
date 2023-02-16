import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import WorkoutHistory from "./WorkoutHistory";

function HistoryContainer(props) {
  return (
    <div className="historyContainerDiv">
      <Card body className="historyContainer" border="secondary">
        <WorkoutHistory userID={props.userID} />
      </Card>
    </div>
  );
}

export default HistoryContainer;
