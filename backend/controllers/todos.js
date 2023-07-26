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

    static async getTodosByUserId(req, res) {
        const { userId } = req.params;
        try {
            const todos = await Todo.getByUserId(userId);
            res.status(200).json(todos);
        } catch (error) {
            res.status(404).json({ error: "No Todos item available." });
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
            todo.todoTitle = todoTitle || todo.todoTitle;
            todo.todoDescription = todoDescription || todo.todoDescription;
            todo.isFinished = isFinished || todo.isFinished;
            todo.userId = userId || todo.userId;
            const result = await todo.update()
            const newTodo = await Todo.getByTodoId(result.todoId);
            res.status(202).json(newTodo);
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
