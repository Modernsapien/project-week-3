const request = require("supertest")
const app = require("../../api")
const db = require("../../database/db")

describe("User", () => {
    let api

    beforeAll(async () => {
        api = app.listen(5001, () => {
            console.log("Test server running on port 5000")
        })
    })

    afterAll(async () => {
        console.log("Stopping test server")
        db.end()
        await api.close()
    })

    let username = ""
    let password = ""
    let token = ""
    let user_id= ""

    //REGISTER
    it("should create a new user", async () => {
        // db.query("INSERT INTO users(first_name, last_name, email, username, password) VALUES('jim', 'bob', 'test@test.com', 'asdf', 'password')")
        const data = {
            first_name: "testF",
            last_name: "testL",
            userEmail: "test@test.com",
            username: "testU",
            password: "testP"
        }

        const response = await request(app)
            .post("/user/register")
            .send(data)
            .expect(201)
        
        username = response.body.username
        password = response.body.password
        expect(username).toEqual(newUser.username)
    })

    //LOGIN
    it("should login the user", async () => {
        const data = {
            username: "username",
            password: "testP"
        }
        const response = await request(app)
            .post("/user/login")
            .send(data)
            .expect(200)

        token = response.token
    })

    //GET USER BY USERNAME
    it("should return the user with provided username", async () => {
        const data = {
            username: username
        }
        const response = await request(app)
        .get("/user/username")
        .send(data)
        .expect(200)
    
    user_id = response.body.id
    expect(response.body.username).toEqual(username)
    })

    //GET USER BY ID
    it("should return the user with provided ID", async () => {
        const response = await request(app)
            .get(`/user/${user_id}`)
            .expect(200)

        expect(response.body.username).toEqual(username)
    })

    //GET USER BY EMAIL
    it("should return the user with provided email", async () => {
        const response = await request(app)
            .get("/user/email")
            .expect(200)

        expect(response.body.username).toEqual(username)
    })

    //GET ALL USERS
    it("should return all users", async () => {
        const response = await request(app)
            .get("/user")
            .expect(200)

        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })

    //UPDATE USER
    it("should update the user", async () => {
        data = {
            firstname: "newTestF",
            lastname: "newTestL",
            username: "newTestU"
        }
        const response = await request(app)
            .put(`user/${user_id}`)
            .send(data)
            .expect(202)
        expect(response.body.username).toEqual(data.username)
        expect(response.body.firstname).toEqual(data.firstname)
        expect(response.body.lastname).toEqual(data.lastname)
    })

    //LOGOUT
    it("should logout the user", async () => {
        headers = {
            authorization: token
        }
        const response = await request(app)
            .get("/user/logout")
            .set(headers)
            .expect(200)
    })

    //DELETE USER
    it("should delete the user with provided ID", async () => {
        const response = await request(app)
            .delete(`user/${user_id}`)
            .expect(204)
    })
})
