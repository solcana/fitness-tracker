import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import WorkoutHistory from "./WorkoutHistory";

function HistoryContainer() {
  return (
    <>
      <Card body>
        History container
        <WorkoutHistory />
      </Card>
    </>
  );
}

export default HistoryContainer;
