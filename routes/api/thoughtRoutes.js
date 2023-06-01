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
} = require("../../controllers/thought-controller");

// Define the routes for /api/thoughts