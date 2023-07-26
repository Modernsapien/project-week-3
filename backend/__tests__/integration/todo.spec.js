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

    //CREATE TODO ITEM
    

})
