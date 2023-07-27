/* eslint-disable react/prop-types */
import { useState } from "react";

function AddEventForm({ showAddForm, formRef, setEvents, events }) {
  const userId = localStorage.getItem("id");

  const colors = ["#bdede0", "#f9aaa3", "#F7D6E0", "#f1dba0"];
  const [form, setForm] = useState({
    eventTitle: "",
    eventDescription: "",
    duration: "",
    date: "",
    time: "",
    color: "",
    reminder: true,
    userId: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(form.time.slice(3));
    const dateTime = new Date(form.date).setHours(
      form.time.slice(0, 2),
      form.time.slice(3)
    );

    const apiURL = "http://localhost:3000/event";
    const res = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        ...form,
        dateTime: new Date(dateTime),
        userId: userId,
      }),
    });
    if (res.ok) {
      alert("New event is added");
      const data = await res.json();
      setEvents(
        [...events, data].sort(
          (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
        )
      );
      setForm({
        eventTitle: "",
        eventDescription: "",
        duration: "",
        date: "",
        time: "",
        color: "",
        reminder: true,
        userId: "",
      });
      formRef.current.close();
    }
  }
  return (
    <dialog open={showAddForm} ref={formRef}>
      <form>
        <h1>Add New Event</h1>
        <div className="input-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            name="eventTitle"
            id="title"
            value={form.eventTitle}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="title">Event Description</label>
          <textarea
            type="text"
            name="eventDescription"
            id="description"
            value={form.eventDescription}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="duration">Duration (mins)</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={form.duration}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">Date & Time</label>
          <div className="date-time-selector">
            <input
              type="date"
              name="date"
              id="date"
              value={form.date}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="time"
              name="time"
              id="time"
              value={form.time}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="input-group">
          <p htmlFor="bgColor">Choose Event Colour</p>
          <div className="radio-group">
            <input
              type="radio"
              name="color"
              value=""
              id="none"
              onChange={(e) => handleChange(e)}
              defaultChecked
            />
            <label htmlFor="none">None</label>
          </div>

          {colors.map((color, i) => {
            return (
              <div className="radio-group" key={i}>
                <input
                  type="radio"
                  name="color"
                  value={color}
                  id={color}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor={color}>
                  <div
                    className="color-block"
                    style={{ background: color }}
                  ></div>
                </label>
              </div>
            );
          })}
        </div>
        <div className="radio-group">
          <input
            type="checkbox"
            name="reminder"
            id="reminder"
            checked={form.reminder}
            onChange={() => setForm({ ...form, reminder: !form.reminder })}
          />
          <label htmlFor="reminder">Reminder</label>
        </div>
        <div className="button-section">
          <button onClick={handleSubmit} className="event-submit-button">
            Submit
          </button>
          <button
            className="event-cancel-button"
            type="button"
            onClick={() => formRef.current.close()}
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default AddEventForm;
