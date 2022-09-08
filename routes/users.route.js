const router = require("express").Router
const {
    createUser, 
    deleteUser, 
    getUser, 
    getUsers, 
    updateUser
} = require("../controllers/users.controllers");

const userRouter = router();

userRouter.route("/").get(getUsers).post(createUser);
userRouter.route("/:useId")
            .get(getUser)
            .patch(updateUser)
            .delete(deleteUser);

module.exports = userRouter;