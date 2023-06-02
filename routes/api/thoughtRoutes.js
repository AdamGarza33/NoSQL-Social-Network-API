// Import the Express router module
const router = require("express").Router();

// Import the thought controller functions
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// Define the routes for /api/thoughts
// GET route to retrieve all thoughts
// POST route to create a new thought
router.route("/").get(getAllThought).post(createThought); 

  // Define the routes for /api/thoughts/:id
  // GET route to retrieve a specific thought by ID
  // PUT route to update a specific thought by ID
  // DELETE route to delete a specific thought by ID
  router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought); 

  // Define the routes for /api/thoughts/:thoughtId/reactions
  // POST route to add a reaction to a specific thought
router.route("/:thoughtId/reactions").post(addReaction);

// Define the routes for /api/thoughts/:thoughtId/reactions/:reactionId
// DELETE route to remove a reaction from a specific thought
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction); 

// Export the router to be used in other parts of the application
module.exports = router;
