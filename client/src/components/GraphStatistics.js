import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Form, Button } from 'react-bootstrap';

function Graph() {
  const [data, setData] = useState([]);

  const handleAddData = (e) => {
    e.preventDefault();
    const newDate = e.target.date.value;
    const newPushUps = parseInt(e.target.pushUps.value);
    const newPullUps = parseInt(e.target.pullUps.value);
    const newSitUps = parseInt(e.target.sitUps.value);
    const newBenchPress = parseInt(e.target.benchPress.value);
    const newCurls = parseInt(e.target.curls.value);
    setData([...data, { date: newDate, pushUps: newPushUps, pullUps: newPullUps, sitUps: newSitUps, benchPress: newBenchPress, curls: newCurls }]);
    e.target.reset();
  };

  return (
    <Container>
      <h1>Usman's Workout Intensity History</h1>
      <Form onSubmit={handleAddData}>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Push-ups</Form.Label>
          <Form.Control type="number" name="pushUps" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pull-ups</Form.Label>
          <Form.Control type="number" name="pullUps" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sit-ups</Form.Label>
          <Form.Control type="number" name="sitUps" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Bench Press</Form.Label>
          <Form.Control type="number" name="benchPress" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Curls</Form.Label>
          <Form.Control type="number" name="curls" required />
        </Form.Group>
        <Button type="submit">Add Data</Button>
      </Form>
      <br />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pushUps" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="pullUps" stroke="#82ca9d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sitUps" stroke="#ffc658" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="benchPress" stroke="#ff7300" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="curls" stroke="#00bcd4" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Graph;
