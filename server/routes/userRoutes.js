//Require necessary NPM Package
const express = require("express"); //SL everything in here ****

//Require Mongoose Model for Article
let User = require("../models/user");

//Instantiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action:         INDEX
 * Method:         HTTP GET method
 * URI:            /api/articles
 * Description:    Get All Articles (what the route is going to do)
 */
router.get("/user", (req, res) => {
	//use the Articles model imported above
	User.find()
		//return all articles as an array
		.then((user) => {
			res.status(200).json({ user: user });
		})
		//Catch any errors that might occur
		.catch((error) => {
			res.status(500).json({ error: error });
		});
});

/**
 * Action:          SHOW
 *  Method:         HTTP GET method
 * URI:            /api/articles/5d664b8b68b4bjdbjdbj
 * Description:    Get an individual Article by Article ID
 */
router.get("/user/:id", (req, res) => {
	//use the Articles model imported above
	User.findById(req.params.id)
		//return an articles as an array
		.then((user) => {
			if (user) {
				res.status(200).json({ user: user });
			} else {
				//If we couldn't find a document with the matching ID
				res.status(404).json({
					error: {
						name: "DocumentNotFoundError",
						message: "The provided ID doesn't match any documnets",
					},
				});
			}
		})
		//Catch any errors that might occur
		.catch((error) => {
			res.status(500).json({ error: error });
		});
});

/**
 * Action:          DESTROY
 *  Method:         HTTP DELETE method
 * URI:            /api/articles/5d664b8b68b4bjdbjdbj
 * Description:    Delete an Article by Article ID
 */
router.delete("/user/:id", (req, res) => {
	User.findById(req.params.id)
		.then((user) => {
			if (user) {
				//Pass the result of Mongoose's .remove method to the next promise on the '.then' chain
				return user.remove();
			} else {
				//If we couldn't find a document with the matching ID
				res.status(404).json({
					error: {
						name: "DocumentNotFoundError",
						message: "The provided ID doesn't match any documnets",
					},
				});
			}
		})
		.then(() => {
			//If the deletion succeeded, return 204 and no JSON
			res.status(204).end();
		})
		// catch any errors that might occur
		.catch((error) => {
			res.status(500).json({ error: error });
		});
});

/**
 * Action:          UPDATE
 *  Method:         PATCH/PUT
 * URI:            /api/articles/5d664b8b68b4bjdbjdbj
 * Description:    Update an Article by Article ID
 */
router.patch("/user/:id", (req, res) => {
	User.findById(req.params.id)
		.then((user) => {
			if (user) {
				//Pass the result of Mongooses `.update` method to the next `.then` on the promise chain
				return user.update(req.body.user);
			} else {
				//If we couldn't find a document with the matching ID
				res.status(404).json({
					error: {
						name: "DocumentNotFoundError",
						message: "The provided ID doesn't match any documents",
					},
				});
			}
		})
		.then(() => {
			//If the update succeeded, return 204(no content) and no JSON
			res.status(204).end();
		})
		// catch any errors that might occur
		.catch((error) => {
			res.status(500).json({ error: error });
		});
});

/**
 * Action:          CREATE
 *  Method:         POST
 * URI:            /api/articles
 * Description:    Create a new Article
 */
router.post("/user", (req, res) => {
	User.create(req.body.user)
		// On a successful `creat` action. respond with 201
		//HTTP status and the content of the new user
		.then((newUser) => {
			res.status(201).json({ user: newUser });
		})
		// catch any errors that might occur
		.catch((error) => {
			res.status(500).json({ error: error });
		});
});

module.exports = router;
