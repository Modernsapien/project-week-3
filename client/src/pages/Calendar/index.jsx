import CalendarComponent from "../../components/CalendarComponent";
import { useState, useRef, useEffect } from "react";
import "./style.css";
import AddEventForm from "../../components/AddEventForm";
const Calendar = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const formRef = useRef(showAddForm);
  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    async function getEvents() {
      const apiURL = `http://localhost:3000/event/user/${userId}`;
      console.log(apiURL);

      const res = await fetch(apiURL);
      const events = await res.json();
      setEvents(
        events.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
      );
    }
    getEvents();
  }, []);

  async function removeEvent(id) {
    await fetch(`http://localhost:3000/event/${id}`, {
      method: "DELETE",
    });
    const filtered = events.filter((el) => el.eventId !== id);
    setEvents([...filtered]);
  }

  return (
    <div className="calendar-paged-body">
      <div className="container-events">
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
          setEvents={setEvents}
          events={events}
        />
        <div className="upcoming-events">
          <h2 className="upcoming-event-title">Upcoming Events</h2>
          {events.length > 0 ? (
            events.map((event, i) => {
              const dateTime = new Date(event.dateTime).getTime();
              const eventEndTime = new Date(
                new Date(event.dateTime).getTime() + event.duration * 60000
              );
              return (
                <div key={i} className="event">
                  <div className="info-section">
                    <p className="event-title">{event.eventTitle}</p>
                    <p className="date-time">
                      {new Date(dateTime).getFullYear()}-
                      {new Date(dateTime).getMonth() + 1}-
                      {new Date(dateTime).getDate()}{" "}
                      {new Date(dateTime)
                        .getHours()
                        .toString()
                        .padStart(2, "0")}
                      :
                      {new Date(dateTime)
                        .getMinutes()
                        .toString()
                        .padStart(2, "0")}{" "}
                      {event.duration &&
                        `- ${eventEndTime
                          .getHours()
                          .toString()
                          .padStart(2, "0")}:${eventEndTime
                          .getMinutes()
                          .toString()
                          .padStart(2, "0")}`}
                    </p>
                  </div>

                  <i
                    className="fas fa-trash-alt"
                    style={{ color: "#F48687", cursor: "pointer" }}
                    onClick={() => removeEvent(event.eventId)}
                  ></i>
                </div>
              );
            })
          ) : (
            <h2 className="no-event-header">No Upcoming Events</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
