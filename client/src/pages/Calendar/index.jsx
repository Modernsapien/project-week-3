import CalendarComponent from "../../components/CalendarComponent";
import { useState, useRef, useEffect } from "react";
import "./style.css";
import AddEventForm from "../../components/AddEventForm";
const Calendar = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const formRef = useRef(showAddForm);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "See Johnkdjfhlskjd hgajshdflakjdsh",
      description: "123",
      date: new Date("2023-07-30T21:15"),
      color: "red",
    },
    { id: 2, title: "See John", date: new Date("2023-07-30T21:15") },
    {
      id: 3,
      title: "See John",
      description: "123",
      date: new Date("2023-07-30T21:15"),
      duration: 120,
    },
    {
      id: 4,
      title: "Call John",
      description: "123",
      date: new Date("2023-07-30T08:04"),
    },
    { id: 5, title: "Meeting with Bob", description: "123", date: new Date() },
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
  async function removeEvent(id) {
    // const res = await fetch(`http://localhost:3000/${id}`, {
    //   method: "DELETE",
    // });
    setEvents(events.filter((el) => el.id !== id));
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
          {events.map((event, i) => {
            const eventEndTime = new Date(
              event.date.getTime() + event.duration * 60000
            );
            return (
              <div key={i} className="event">
                <div className="info-section">
                  <p className="event-title">{event.title}</p>
                  <p className="date-time">
                    {event.date.getFullYear()}-{event.date.getMonth() + 1}-
                    {event.date.getDate()}{" "}
                    {event.date.getHours().toString().padStart(2, "0")}:
                    {event.date.getMinutes().toString().padStart(2, "0")}{" "}
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
                <button
                  className="remove-event"
                  onClick={() => removeEvent(event.id)}
                >
                  <svg
                    fill="#ff0000"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 408.483 408.483"
                  >
                    <g>
                      <g>
                        <path
                          d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316
			H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293
			c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329
			c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355
			c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356
			c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"
                        />
                        <path
                          d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916
			c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
