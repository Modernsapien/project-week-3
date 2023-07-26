const request = require("supertest")
const app = require("../../api")
const db = require("../../database/db")

describe("Todo", () => {
    let api

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


    //GET TODO BY TODOID


    //GET TODO BY TODO USERID


    //UPDATE TODO


    //DELETE TODO
    

})
