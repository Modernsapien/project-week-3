/* eslint-disable react/prop-types */
import { useState } from "react";

function AddEventForm({ showAddForm, formRef }) {
  console.log(formRef);
  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    date: "",
    time: "",
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
        <div className="button-section">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={() => formRef.current.close()}>Cancel</button>
        </div>
      </form>
    </dialog>
  );
}

export default AddEventForm;
