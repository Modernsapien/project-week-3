const request = require("supertest")
const app = require("../../api")
const db = require("../../database/db")

describe("Calendar", () => {
    let api
    let user_id = 1
    let event_id
    let testData = {}

    beforeAll(async () => {
        api = app.listen(5002, () => {
            console.log("Test server running on port 5002")
        })
    })

    afterAll(async () => {
        console.log("Stopping test server")
        db.end()
        await api.close()
    })


    //CREATE EVENT
    it("should create a new event", async () => {        

        const data = {
            eventTitle: "testTitle",
            eventDescription: "testDescription",
            dateTime: "2023-07-26",
            duration: 15,
            reminder: true,
            color: "#DBEDE0",
            userId: user_id
        }
        testData = data
        response = await request(app)
            .post("/event")
            .send(data)
            .expect(200)

        event_id = response.body.eventId

        expect(response.body.eventTitle).toEqual(data.eventTitle)
    })

    //SEARCH EVENT
    it("should return an event based on a keyword", async () => {
        data = {
            keyword: "testDesc"
        }
        const response = await request(app)
            .get("/event/search")
            .send(data)
            .expect(200)

        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })

    //GET EVENT BY USER ID
    it("should return all events for a user", async () => {
        const response = await request(app)
            .get(`/event/user/${user_id}`)
            .expect(200)

        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })

    //GET EVENT BY EVENT ID
    it("should return the event with given event_id", async () => {
        const response = await request(app)
            .get(`/event/${event_id}`)
            .expect(200)

        expect(response.body.eventTitle).toEqual(testData.eventTitle)
    })

    //GET ALL EVENTS
    it("should return all events", async () => {
        const response = await request(app)
            .get("/event")
            .expect(200)

        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
    })

    //UPDATE EVENT
    it("should update event with given event_id", async () => {
        testData.eventTitle = "newTestTitle"
        testData.eventDescription = "newTestDescription"

        const response = await request(app)
            .patch(`/event/${event_id}`)
            .send(testData)
            .expect(202)

        expect(response.body.eventTitle).toEqual(testData.eventTitle)
    })

    //DELETE EVENT
    it("should delete event with given event_id", async () => {
        let response = await request(app)
            .delete(`/event/${event_id}`)
            .expect(204)
    })
})
