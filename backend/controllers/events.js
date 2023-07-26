const Event = require("../models/Events");

class EventController {
  static async getAllEvents(req, res) {
    try {
      const events = await Event.getAll();
      res.status(200).json(events);
    } catch (error) {
      res.status(404).json({ error: "Unable to fetch events." });
    }
  }

  static async getEventById(req, res) {
    const { id } = req.params;
    try {
      const event = await Event.getById(id);
      res.status(200).json(event);
    } catch (error) {
      res.status(404).json({ error: "Event not found." });
    }
  }

  static async searchEvent(req, res) {
    const { keyword } = req.body;
    try {
      const events = await Event.getByKeyword(keyword);
      res.status(200).json(events);
    } catch (error) {
      res.status(404).json({ error: "No event found with keyword provided." });
    }
  }

  static async getEventByUserId(req, res) {
    const { userId } = req.params;
    try {
      const events = await Event.getByUserId(userId);
      res.status(200).json(events);
    } catch (error) {
      res.status(404).json({ error: "No event found with userID provided." });
    }
  }

  static async createEvent(req, res) {
    const data = req.body;
    console.log(data);
    try {
      const event = await Event.create(data);
      res.status(200).json(event);
    } catch (error) {
      res.status(404).json({ error: "Cannot create event." });
    }
  }

  static async updateEvent(req, res) {
    const eventId = req.params.id;
    const {
      eventTitle,
      eventDescription,
      dateTime,
      duration,
      reminder,
      colour,
      userId,
    } = req.body;
    try {
      const event = await Event.getById(eventId);
      event.eventTitle = eventTitle || event.eventTitle;
      event.eventDescription = eventDescription || event.eventDescription;
      event.dateTime = dateTime || event.dateTime;
      event.duration = duration || event.duration;
      event.reminder = reminder || event.reminder;
      event.colour = colour || event.colour;
      event.userId = userId || event.userId;
      const result = await event.update();
      const newEvent = await Event.getById(result.eventId);
      res.status(202).json(newEvent);
    } catch (error) {
      res.status(404).json({ error: "Event not found." });
    }
  }

  static async deleteEvent(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      const event = await Event.getById(id);
      await event.delete();
      res.status(204).json({ message: "Event deleted successfully." });
    } catch (error) {
      res.status(404).json({ error: "Event not found." });
    }
  }
}

module.exports = EventController;
