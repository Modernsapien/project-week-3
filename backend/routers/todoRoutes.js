const express = require("express");
const TodoController = require("../controllers/todos");

const router = express.Router();

router.get("/todo/:todoId", TodoController.getTodoByTodoId);
router.get("/user/:userId", TodoController.getTodosByUserId);
router.post("/", TodoController.createTodo);
router.patch("/:todoId", TodoController.updateTodo);
router.delete("/:todoId", TodoController.deleteTodo);


module.exports = router;
