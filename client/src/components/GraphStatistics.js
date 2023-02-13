import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class GraphStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    // Replace this with code to fetch the user's workout history data from a backend API or database
    const workoutData = [1, 2, 3, 4, 5, 6, 7];

    // Update the component's state with the fetched workout history data
    this.setState({
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Workout Intensity',
            data: workoutData,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
            fill: true
          }
        ]
      }
    });
  }

  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <div
              className="p-3 mb-5 bg-white rounded"
              style={{ height: "500px", border: "1px solid #ccc" }}
            >
              {/* Placeholder graph */}
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <h3>Graph will be rendered here</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GraphStatistics;
