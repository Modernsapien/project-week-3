/* eslint-disable react/prop-types */
import { useState } from "react";

function AddEventForm({ showAddForm, formRef, setEvents, events }) {
  const colors = ["#DBEDE0", "#006494", "#F25F5C", "#F7D6E0", "#FDCA40"];
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    date: "",
    time: "",
    color: "",
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const apiURL = "";
    const res = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("New event is added");
      const data = await res.json();
      setEvents([...events, data]);
    }
  }
  console.log(form);
  return (
    <dialog open={showAddForm} ref={formRef}>
      <form>
        <h1>Add New Event</h1>
        <div className="input-group">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={form.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="title">Event Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            value={form.description}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="duration">Duration (mins)</label>
          <input type="number" name="duration" id="duration" />
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
        <div className="button-section">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => formRef.current.close()}>Cancel</button>
        </div>
      </form>
    </dialog>
  );
}

export default AddEventForm;
