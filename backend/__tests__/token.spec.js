const request = require("supertest")
const app = require("../api")
const db = require("../database/test-db")

describe("Calendar", () => {
    let api

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
})
