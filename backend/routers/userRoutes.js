const express = require("express");
const UserController = require("../controllers/users");

const router = express.Router();

router.get("/checkEmailToken", UserController.checkEmailToken);
router.get("/username", UserController.getUserByUsername);
router.get("/email", UserController.getUserByEmail);
router.get("/:id", UserController.getUserById);
router.get("/", UserController.getAllUsers);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);


module.exports = router;
