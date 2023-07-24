import CalendarComponent from "../../components/CalendarComponent";
import { useState, useRef, useEffect } from "react";
import "./style.css";
import AddEventForm from "../../components/AddEventForm";
const Calendar = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const formRef = useRef(showAddForm);
  const [events, setEvents] = useState([
    {
      title: "See Johnkdjfhlskjd hgajshdflakjdsh",
      description: "123",
      date: new Date("2023-07-30T21:15"),
      color: "red",
    },
    { title: "See John", date: new Date("2023-07-30T21:15") },
    {
      title: "See John",
      description: "123",
      date: new Date("2023-07-30T21:15"),
    },
    {
      title: "Call John",
      description: "123",
      date: new Date("2023-07-30T08:15"),
    },
    { title: "Meeting with Bob", description: "123", date: new Date() },
  ]);

  useEffect(() => {
    async function getEvents() {
      const apiURL = "";
      const res = await fetch(apiURL);
      const events = await res.json();
      setEvents(events);
    }
    // getEvents();
  }, []);
  return (
    <div className="calendar-paged-body">
      <div className="container">
        <CalendarComponent events={events} />
      </div>
      <div className="edit-section">
        <button
          type="button"
          className="add-event"
          onClick={() => formRef.current.showModal()}
        >
          + Add Event
        </button>
        <AddEventForm
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
          formRef={formRef}
        />
      </div>
    </div>
  );
};

export default Calendar;
