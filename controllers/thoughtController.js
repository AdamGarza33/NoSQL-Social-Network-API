// Import the Thought and User models
const { Thought, User } = require("../models");

// Define the thoughtController object
const thoughtController = {
    // get all Thoughts
    getAllThought(req, res) {
      Thought.find({})
        .populate({
          path: "reactions",
          select: "-__v",
        })
        .select("-__v")
        .sort({ _id: -1 })
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => {
          console.log(err);
          res.sendStatus(400);
        });
    },

    // get one Thought by id
  getThoughtById({ params }, res) {
    // Find a single thought by its _id
    Thought.findOne({ _id: params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((dbThoughtData) => {
        // Check if a thought with the provided ID exists
        if (!dbThoughtData) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};