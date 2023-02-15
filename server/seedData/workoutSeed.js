const workoutSeedData = [
    {
        name: "Morning Workout on 10/02/2023",
        startDate: new Date(2023, 02, 02, 14, 33, 12),
        completed: true,
        exercises: [
            {
                name: "Squat",
                weight: 20,
                reps: 10,
                completed: true,
            },{
                name: "Lunge",
                weight: 30,
                reps: 10,
                completed: true,
            },{
                name: "Curl",
                weight: 5,
                reps: 20,
                completed: true,
            }
        ],
    },{
        name: "Afternoon Workout on 11/02/2023",
        startDate: new Date(2023, 02, 04, 12, 33, 12),
        completed: true,
        exercises: [
            {
                name: "Pull-ups",
                weight: 0,
                reps: 10,
                completed: true,
            },{
                name: "Dead-lift",
                weight: 100,
                reps: 8,
                completed: true,
            },{
                name: "Bench Press",
                weight: 80,
                reps: 5,
                completed: true,
            }
        ],
    },
]

module.exports = workoutSeedData
  