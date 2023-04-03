# Fitness-Tracker

## About

This was a group project, MERN stack app with full CRUD actions. Users can log in, create a profile, and track their workouts by adding, editing, and deleting workouts and exercises. The app was built in 7.5 days, using ReactJS, Express, MongoDB, HTML, CSS, Bootstrap, JS, and JSX.

---

## Link

https://fitness-tracker-ga-sei.netlify.app/ 

---

## Getting Started / Code Installation

- Clone or download this repo
- Navigate into the project directory
- Run npm install in your terminal to install all dependencies, including Express, Mongoose, bycrypt, and other libraries
- Start the server using npm start and open the browser, go to http://localhost:3000/

---

## Timeframe / Working Team

App was built in 7.5 days, in a working team including [Hal Evans]([url](https://github.com/halevans)), [ Selina Lavery]([url](https://github.com/sml-40)) and [Ethan Berk]([url](https://github.com/ethandb23)). 

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- React.js
- React Router
- Bcrypt: A library used for password hashing.
- Cors: A middleware used to enable Cross-Origin Resource Sharing (CORS) for Express.js.
- jsonwebtoken: A library used for generating and verifying JSON Web Tokens (JWT).
- passport: An authentication middleware for Node.js that supports various authentication strategies.
- passport-jwt: A strategy for passport that supports authentication using JSON Web Tokens (JWT).
- Webpack
- Fly.io
- MongoAtlas
- Netlify
- Git / Github
- Axios

---
## Brief

- Build a full stack web application. Must be your own work.
- Select a Project Idea of your own.
- Use Express with React to build your application
- Deploy on Heroku or a similar platform so application is live on the web
- Craft a README.md file that explains your app to the world

### Technical Requirements

- Build a full stack web application. Must be your own work
- Select a Project Idea of your own
- Have at least 2 models (more if it makes sense)
    - Auth is a requirement
- Have full CRUD on at least one of your models
- Be able to Add/Delete on any remaining models
- Have high quality code:
    - Follow accepted naming conventions
    - Consistent indentation
   - Well-structure and readable code
   - Semantic naming of variables, functions, CSS classes, etc
   - Short and clear functions that do one thing
   - Efficient code - if you have your MVP, refactor
   - DRY (Don’t repeat yourself) code
- Use one of these technology stacks. You may choose which tech stack
   - Full-Stack Rails App
   - Rails API with React Front-End
   - Express API with React Front-End
- Be deployed on Heroku or similar platform
- Craft a readme.md file that explains your app

---

## Planning 

We kicked off the planning by first figuring out the idea for the project, going back and forth between a few ideas and eventually landing on the idea of a fitness tracker app as a group. We then moved on to figuring out the ERD, wireframes and user stories. You can find them attached below. 

#### ERD

![Entity Relationship Diagram](/assets/Images/ERD.png)

Our ERD includes the User, Workout and Exercise model. The user can have zero to many workouts, and a workout can have at least one or many exercises. An exercise must have a workout and a workout must have a user to be associated with.

#### Wireframing Brainstorming

1. Login page (authentication happens)
2. Profile Page / Dashboard (once logged in)
3. Workout Page (MODEL e.g. type of exercise: string, reps: number, weight: number .....)
4. General Blog/Article Page (e.g. food, workout tips etc.)
   - Weight, water, calories intake, body measurements (MODEL e.g. weight: number, calories: number .....)

#### Wireframes

![Wireframe for Login](/assets/Images/Login%20Page.png)

![Wireframe for Profile/Dashboard](/assets/Images/Profile_Dashboard.png)

![Wireframe for Exercise Page](/assets/Images/Workout%20Page.png)

#### User Stories

- [ ] As a user I want to be able to login, so that I can access my profile
- [ ] As a user I want to be able to sign up, so that I can start using the fitness tracker
- [ ] As a user I want to be able to view dashboard, so that I can keep track of my exercises
- [ ] As a user I want to be able to add a exercise, so I can keep track of it
- [ ] As a user I want to be able to edit a exercise, so I can keep it up to date
- [ ] As a user I want to be able to delete a exercise, so I can keep the list up to date
- [ ] As a user I want to be able to view all exercises, so I see my history
- [ ] As a user I want to be able to edit my profile, so I can keep it up to date
- [ ] As a user I want to be able to navigate to each page, so that I can go to any page
- [ ] As a user I want to be able to add in the weight for each exercise, so that I can keep track of my progress
- [ ] As a user I want to be able to add in the reps for each exercise, so that I can keep track of my progress
- [ ] As a user I want to be able to finish the workout, so that all my exercises are saved to my history

#### Trello - Project Management

We also used Trello project management tool to help in splitting the work and keeping each other up to date 

<img width="1399" alt="Screenshot 2023-02-17 at 09 20 43" src="https://user-images.githubusercontent.com/114579141/219604711-a7f46696-10e2-485e-93d4-acba3c634a4c.png">

---

## Build / Code Process

- By day 2, after we were all happy with the project concept, wireframes and erd, we began building out the backend using Node.js, creating the models and routes. We also created an initial seed file to work and test the app with. We embedded our exercise model into our workout model, as we would be accessing the exercise data within the context of a workout, so we figured this would be the most appropriate approach.
- Example of the index route for all workouts

```
/**
 * Action:         INDEX
 * Method:         HTTP GET method
 * URI:            /api/workout
 * Description:    Get All workouts (what the route is going to do)
 */
router.get("/api/workout", (req, res) => {
  // Get the user id from the query parameter
  const userId = req.query.user;

  if (userId) {
    // Use the workout model imported above to find workouts with the given user id
    Workout.find({ user: userId })
      // Return matching workouts as an array
      .then((workouts) => {
        res.status(200).json({ workouts: workouts });
      })
      // Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  } else {
    //use the workout model imported above
    Workout.find()
      //return all articles as an array
      .then((workouts) => {
        res.status(200).json({ workouts: workouts });
      })
      //Catch any errors that might occur
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  }
});
```
- After finishing up all with the routes and configuring the backend, we started the frontend using React and that’s where we split the work. This was both exciting and challenging, as it involved going through loads of documentation and past labs / projects for reference. Any blockers that arose from any of the team members were discussed with the whole team promptly and resolved either as a team, or in pairs / three people. 
- My part was mainly the workout page, so I started that off by building the UI for it using Bootstrap. This part was split into three components (WorkoutHistoryItem, WorkoutHistory and HistoryContainer), and I used Bootstrap’s card component to store the content for those. That took me a whole day of testing and re-doing, but once done and happy with it, I moved on to the functionality of it. 

```
 <Card style={{ width: "100%" }} border="primary">
          <Card.Body>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                {this.props.workout.name
                  ? this.props.workout.name
                  : "Default Exercise Name"}
              </Card.Title>
              <div className="d-flex ml-auto">
```

- The WorkoutHistory component is the parent component to WorkoutHistoryItem, and is responsible for fetching the workout data from the API and rendering a list of workouts.

```
componentDidMount() {
    axios
      .get(`${apiUrl}/workout?user=${this.props.userID}`)
      .then((response) => {
        this.setState({ workouts: response.data.workouts });
      })
      .catch((error) => {
        console.log(error);
      });
  }
```

- It also has some methods for handling CRUD operations, including deleting a workout, editing a workout and deleting an exercise, which I then passed to the child component WorkoutHistoryItem. 

```
handleDeleteWorkout = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workout?"
    );
    if (confirmDelete) {
      axios
        .delete(apiUrl + "/workout/" + id)
        .then((response) => {
          const updatedWorkouts = this.state.workouts.filter(
            (workout) => workout._id !== id
          );
          this.setState({ workouts: updatedWorkouts });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  ```
  
  ```
    handleEditWorkout = (updatedWorkout) => {
    console.log("Updated workout: ", updatedWorkout);

    const updatedWorkouts = this.state.workouts.map((workout) => {
      console.log(workout);
      if (workout._id === updatedWorkout._id) {
        return updatedWorkout;
      } else {
        return workout;
      }
    });

    this.setState({ workouts: updatedWorkouts });
  };

  ```
  
  ``` 
   render() {
    const workoutList = this.state.workouts.map((workout, index) => {
      return (
        <div key={index}>
          <WorkoutHistoryItem
            workout={workout}
            handleDeleteWorkout={this.handleDeleteWorkout}
            handleEditWorkout={this.handleEditWorkout}
            handleDeleteExercise={this.handleDeleteExercise}
          />
        </div>
      );
    });
  ```
  
  - These were also further passed into the other child components (ExerciseHistory and WorkoutEditModal), which at this point were Hal’s responsibility mainly. Our parts were quite heavily intertwined, so over the next few days, Hal and I pair programmed quite a big chunk of the workload in those regards. During this time, communication really was key in keeping each other up to date at all times, and making sure we are not working on the same thing at the same time. 
- Finally, the HistoryContainer is the top level component that also renders Bootstrap’s ‘Card” and the child component WorkoutHistory. 

```
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
```

- Throughout the project period, we all kept each other in the loop in terms of what one has done for the day, and what was pushed or pulled. We also always got together before pulling or pushing any major changes to Github. This was really a great demo of how a real world project would feel like working with a group of people using Git / Github, and it really helped in understand Git way more than I did up to this point. 
- Closer to the last project days, we also added a navbar and a React Router for easier navigation between the pages.

---

## Challenges

- This project presented a considerable challenge as it required working with a range of new technologies, from React to the backend, within quite a tight timeframe, and with relatively new technologies. After working on this project I feel inspired to continue to practise and develop my skills with these technologies.. 
- One of the biggest challenges though was sorting out the CORS issues we kept receiving once we tried deploying the app on Fly.io. It took us a very substantial amount of time figuring that out and at the end the issue was mainly due to MongoAtlas and its accessibility. Once we changed that, in a while, everything started working fine. 

---

## Wins

Biggest win is being able to build a fully working app, in a short amount of time, using relatively new technology and figuring our way through working that out together as a group / or as a pair - which were all new to me. I must say though, I felt really happy with our group dynamics, as we kept everything very transparent and explicit, and we prioritised communication between each other at all times. 
It also allowed me to see that I actually know more than I think I do, as working as a group would take away a bit of the anxiety, since now the whole project is not solely on you, but on three other people. And so, being more relaxed about that and talking through the process out loud with my peers really let me see that I’m way more ahead than I think I am. 

---

## Key Learnings / Takeaway

- Pair programming was a major aspect of this project for me, and I highly enjoyed it. I felt Hal and I were patient with each other, respectful of each other’s opinions and thought processes, and on the same page with absolutely everything we did during that time, every step of the way. So no wonder the process felt quite enjoyable. 
- Also as mentioned before, talking through the process out loud made a HUGE difference in understanding where I’m going wrong or what’s the next step, so that feels like a very important takeaway. 

---

## Future Improvements

- Graph section to display workout / exercises automatically data from the database, rather than having to insert it manually.
- The styling and layout can be improved
