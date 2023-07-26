const db = require("../database/db");

require("dotenv").config();

class Event {
    constructor({
        event_id,
        event_title,
        event_description,
        date_time,
        duration,
        reminder,
        colour,
        user_id,
    }) {
        this.eventId = event_id;
        this.eventTitle = event_title;
        this.eventDescription = event_description;
        this.dateTime = date_time;
        this.duration = duration;
        this.reminder = reminder;
        this.colour = colour;
        this.userId = user_id;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM events");
        return response.rows.map((row) => new Event(row));
    }

    static async getById(id) {
        const response = await db.query("SELECT * FROM events WHERE event_id = $1", [
            id,
        ]);
        if (response.rows.length !== 1) {
            throw new Error("Unable to locate event.");
        }
        return new Event(response.rows[0]);
    }

    static async getByUserId(userId) {
        const response = await db.query("SELECT * FROM events WHERE user_id = $1", [userId]);
        if (response.rows.length == 0) {
            throw new Error("No event found");
        }
        return response.rows.map((row) => new Event(row));
    }

    static async getByKeyword(keyword) {
        keyword = `%${keyword}%`
        const response = await db.query("SELECT * FROM events WHERE event_title LIKE $1 OR event_description LIKE $1", [keyword]);
        if (response.rows.length == 0) {
            throw new Error("No event found.");
        }
        return response.rows.map((row) => new Event(row));
    }

    static async create(data) {
        const {
            eventTitle: event_title,
            eventDescription: event_description,
            dateTime: date_time,
            duration,
            reminder,
            colour,
            userId: user_id
        } = data;

        const query =
            "INSERT INTO events (event_title, event_description, date_time, duration, reminder, colour, user_id) " +
            "VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING event_id";
        const values = [event_title, event_description, date_time, duration, reminder, colour, user_id];
        const response = await db.query(query, values);
        const newId = response.rows[0].event_id;
        return Event.getById(newId);
    }

    async update() {
        const query =
            "UPDATE events SET event_title = $1, event_description = $2, date_time = $3, duration = $4 , reminder = $5, user_id = $6, colour = $7 " +
            "WHERE event_id = $8";
        const values = [
            this.eventTitle,
            this.eventDescription,
            this.dateTime,
            this.duration,
            this.reminder,
            this.userId,
            this.colour,
            this.eventId
        ];
        await db.query(query, values);
        return this;
    }

    async delete() {
        await db.query("DELETE FROM events WHERE event_id = $1", [this.eventId]);
    }
}

module.exports = Event
