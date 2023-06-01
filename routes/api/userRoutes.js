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