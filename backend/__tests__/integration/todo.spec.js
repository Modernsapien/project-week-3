const request = require("supertest")
const app = require("../../api")
const db = require("../../database/db")

describe("Todo", () => {
    let api
    let userId = 1
    let todoId
    let todoTitle
    
    beforeAll(async () => {
        api = app.listen(5004, () => {
            console.log("Test server running on port 5004")
        })
    })

    afterAll(async () => {
        console.log("Stopping test server")
        db.end()
        await api.close()
    })

    //CREATE TODO ITEM
    it("should create a new todo item", async () => {
        data = {
            todoTitle: "testTitle",
            todoDescription: "testDescription",
            isFinished: false,
            userId: userId
        }
        const response = await request(app)
            .post("/todos")
            .send(data)
            .expect(200)

        todoId = response.body.todoId
        todoTitle = response.body.todoTitle
        expect(response.body.todoTitle).toEqual(data.todoTitle)
    })

    //GET TODO BY TODOID
    it("should return a todo item with provided todoid", async () => {
        const response = await request(app)
            .get(`/todos/todo/${todoId}`)
            .expect(200)

        expect(response.body.todoTitle).toEqual(todoTitle)
    })

    //GET TODO BY TODO USERID
    it("should return todo items with provided userId", async() => {
        const response = await request(app)
            .get(`/todos/user/${userId}`)
            .expect(200)

        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })

    //UPDATE TODO
    it("should update todo", async () => {
        data = {
            isFinished: true
        }
        const response = await request(app)
            .patch(`/todos/${todoId}`)
            .send(data)
            .expect(202)
        
        expect(response.body.isFinished).toEqual(data.isFinished)
    })

    //DELETE TODO
    it("should delete the todo item", async () => {
        const response = await request(app)
            .delete(`/todos/${todoId}`)
            .expect(204)
    })

})
