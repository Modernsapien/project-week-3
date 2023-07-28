const Todo = require("../models/Todos");

class TodoController {
  static async getTodoByTodoId(req, res) {
    const { todoId } = req.params;
    try {
      const todo = await Todo.getByTodoId(todoId);
      res.status(200).json(todo);
    } catch (error) {
      res.status(404).json({ error: "Todo item not found." });
    }
  }

  static async getAllTodosByUserId(req, res) {
    const { userId } = req.params;
    try {
      const todos = await Todo.getAllByUserId(userId);
      res.status(200).json(todos);
    } catch (error) {
      res.status(404).json({ error: "No Todos item available." });
    }
  }

  static async getCompletedTodosByUserId(req, res) {
    const { userId } = req.params;
    try {
      const todos = await Todo.getCompletedByUserId(userId);
      res.status(200).json(todos);
    } catch (error) {
      res.status(404).json({ error: "No completed Todos item available." });
    }
  }

  static async getIncompletedTodosByUserId(req, res) {
    const { userId } = req.params;
    try {
      const todos = await Todo.getIncompletedByUserId(userId);
      res.status(200).json(todos);
    } catch (error) {
      res.status(404).json({ error: "No incompleted Todos item available." });
    }
  }

  static async createTodo(req, res) {
    const data = req.body;
    try {
      const todo = await Todo.create(data);
      res.status(200).json(todo);
    } catch (error) {
      res.status(404).json({ error: "Cannot create Todo item." });
    }
  }

  static async updateTodo(req, res) {
    const { todoId } = req.params;
    const { todoTitle, todoDescription, isFinished, userId } = req.body;
    try {
      const todo = await Todo.getByTodoId(todoId);
      console.log({ find: todo });
      const newTodoStatus = {
        todoTitle: todoTitle || todo.todoTitle,
        todoDescription: todoDescription || todo.todoDescription,
        isFinished:
          isFinished === todo.isFinished ? todo.isFinished : !todo.isFinished,
      };
      console.log(newTodoStatus);
      const result = await todo.update(newTodoStatus);
      console.log({ result });
      res.status(202).json(result);
    } catch (error) {
      res.status(404).json({ error: "Todo not found." });
    }
  }

  static async deleteTodo(req, res) {
    const { todoId } = req.params;
    try {
      const todo = await Todo.getByTodoId(todoId);
      await todo.delete();
      res.status(204).json({ message: "Todo item deleted successfully." });
    } catch (error) {
      res.status(404).json({ error: "Todo not found." });
    }
  }
}

module.exports = TodoController;
