// Import express router module
const router = require("express").Router();
// Import the user routes module
const userRoutes = require("./userRoutes");
// Import the thought routes module
const thoughtRoutes = require("./thoughtRoutes");
// Register the user routes under "/users" path
router.use("/users", userRoutes);
// Register the thought routes under "/thoughts" path
router.use("/thoughts", thoughtRoutes);

module.exports = router;