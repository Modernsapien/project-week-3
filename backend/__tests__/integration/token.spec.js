const request = require("supertest")
const app = require("../../api")
const db = require("../../database/db")

describe("Calendar", () => {
    let api
    let token
    let token_id
    let user_id

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log("Test server running on port 5000")
        })
    })

    afterAll((done) => {
        console.log("Stopping test server")
        db.end()
        api.close(done)
    })

    //CREATE TOKEN
    it("should create a token", async () => {
        //CREATE TEST USER
        const testUser = {
            first_name: "testF",
            last_name: "testL",
            userEmail: "test@test.com",
            username: "testU",
            password: "testP"
        }
        let response = await request(app)
                .post("/user/register")
                .send(data)

        user_id = response.body.user_id

        response = await request(app)
            .post(`/token/create/${user_id}`)
            .expect(200)

        token = response.body.token
        token_id = response.body.token_id

    })

    //GET ONE BY ID
    it("should return token with provided token_id", async () => {
        const response = await request(app)
            .get(`/token/user${token_id}`)
            .expect(200)

        expect(response.body.token).toEqual(token)
    })

    //GET ONE BY TOKEN
    it("should return token with provided token", async () => {
        const response = await request(app)
            .get(`/token/token/${token}`)
            .expect(200)

        expect(response.body.token_id).toEqual(token_id)
    })

    //DELETE TOKEN
    it("should delete token with provided token", async () => {
        let response = await request(app)
            .delete(`/token`)
            .send(data = {
                token
            })
            .expect(204)

        response = await request(app)
            .delete(`/user/${user_id}`)
    })
})
