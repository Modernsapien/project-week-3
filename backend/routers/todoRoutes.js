const express = require("express");
const TodoController = require("../controllers/todos");

const router = express.Router();

router.get("/todo/:todoId", TodoController.getTodoByTodoId);
router.get("/user/completed/:userId", TodoController.getCompletedTodosByUserId);
router.get("/user/incompleted/:userId", TodoController.getIncompletedTodosByUserId);
router.get("/user/:userId", TodoController.getAllTodosByUserId);
router.post("/", TodoController.createTodo);
router.patch("/:todoId", TodoController.updateTodo);
router.delete("/:todoId", TodoController.deleteTodo);


module.exports = router;
