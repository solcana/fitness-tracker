import React from 'react';
import { Line } from 'react-chartjs-2';

// Define the GraphStatistics component as a class component
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

  // Render the component
  render() {
    return (
      <div>
        {/* Render the line graph using the data stored in the component's state */}
        <Line
          data={this.state.data}
          options={{
            title: {
              display: true,
              text: 'Workout History',
              fontSize: 20
            },
            legend: {
              display: false
            }
          }}
        />
      </div>
    );
  }
}

// Export the GraphStatistics component
export default GraphStatistics;
