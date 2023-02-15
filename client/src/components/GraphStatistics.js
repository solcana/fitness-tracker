import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Form, Button } from 'react-bootstrap';

function Graph() {
  const [data, setData] = useState([]);

  const handleAddData = (e) => {
    e.preventDefault();
    const newDate = e.target.date.value;
    const newWorkout = e.target.workout.value;
    const newReps = parseInt(e.target.reps.value);
    setData([...data, { date: newDate, workout: newWorkout, reps: newReps }]);
    e.target.reset();
  };

  return (
    <Container>
      <h1>Usman's Workout History</h1>
      <Form onSubmit={handleAddData}>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Workout Name</Form.Label>
          <Form.Control type="text" name="workout" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Intensity</Form.Label>
          <Form.Control as="select" name="reps">
            {[...Array(10)].map((_, i) => (
              <option key={i + 1}>{i + 1}</option>
            ))}
          </Form.Control>
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
          <Line type="monotone" dataKey="reps" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Graph;
