const db = require("../database/db");

require("dotenv").config();

class Todo {
    constructor({
        todo_id,
        todo_title,
        todo_description,
        is_finished,
        user_id
    }) {
        this.todoId = todo_id;
        this.todoTitle = todo_title;
        this.todoDescription = todo_description;
        this.isFinished = is_finished;
        this.userId = user_id
    }

    static async getAllByUserId(id) {
        const response = await db.query("SELECT * FROM todos WHERE user_id = $1", [id]);
        if (response.rows.length == 0) {
            throw new Error("No Todo items found");
        }
        return response.rows.map((row) => new Todo(row));
    }

    static async getCompletedByUserId(id) {
        const response = await db.query("SELECT * FROM todos WHERE user_id = $1 AND is_finished = true", [id]);
        if (response.rows.length == 0) {
            throw new Error("No completed Todo items found");
        }
        return response.rows.map((row) => new Todo(row));
    }

    static async getIncompletedByUserId(id) {
        const response = await db.query("SELECT * FROM todos WHERE user_id = $1 AND is_finished = false", [id]);
        if (response.rows.length == 0) {
            throw new Error("No incompleted Todo items found");
        }
        return response.rows.map((row) => new Todo(row));
    }

    static async getByTodoId(id) {
        const response = await db.query("SELECT * FROM todos WHERE todo_id = $1", [id]);
        if (response.rows.length !== 1) {
            throw new Error("No Todo item found");
        }
        return new Todo(response.rows[0])
    }

    static async create(data) {
        const {
            todoTitle: todo_title,
            todoDescription: todo_description,
            isFinished: is_finished,
            userId: user_id
        } = data;

        const query =
            "INSERT INTO todos (todo_title, todo_description, is_finished, user_id) " +
            "VALUES ($1, $2, $3, $4) RETURNING todo_id";
        const values = [todo_title, todo_description, is_finished, user_id];
        const response = await db.query(query, values);
        const newId = response.rows[0].todo_id;
        return Todo.getByTodoId(newId);
    }

    async update() {
        const query =
            "UPDATE todos SET todo_title = $1, todo_description = $2, is_finished = $3 , user_id = $4 " +
            "WHERE todo_id = $5";
        const values = [
            this.todoTitle,
            this.todoDescription,
            this.isFinished,
            this.userId,
            this.todoId
        ];
        await db.query(query, values);
        return this;
    }

    async delete() {
        await db.query("DELETE FROM todos WHERE todo_id = $1", [this.todoId]);
    }

}

module.exports = Todo;
