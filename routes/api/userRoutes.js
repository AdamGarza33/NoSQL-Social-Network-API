const router = require("express").Router();


const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
  } = require("../../controllers/user-controller");
  
  // Define the routes for /api/users
router.route("/").get(getAllUser).post(createUser);

// Define the routes for /api/users/:id
router.route("/:id").get(getUserById) .put(updateUser) .delete(deleteUser); 

// Define the routes for /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

// Export the router to be used in other parts of the app
module.exports = router;