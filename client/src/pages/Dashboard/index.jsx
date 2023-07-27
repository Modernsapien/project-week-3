import "./style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Dashboard() {
  const userId = localStorage.getItem("id");
  const [nextEvent, setNextEvent] = useState();
  useEffect(() => {
    async function getEvents() {
      const apiURL = `http://localhost:3000/event/user/${userId}`;
      console.log(apiURL);

      const res = await fetch(apiURL);
      const data = await res.json();
      const sorted = data.sort(
        (a, b) => new Date(a.dateTime) - new Date(b.dateTime)
      );
      for (let i = 0; i < sorted.length; i++) {
        if (new Date(sorted[i].dateTime) > new Date()) {
          setNextEvent(sorted[i]);
          return;
        }
      }
    }
    getEvents();
  }, []);

  return (
    <div className="dashboard-body-container">
      <img
        src="https://i.imgur.com/ULrJBgp.jpg"
        alt="study-pic"
        className="study-pic"
      />
      
      <div className="directory-section">
        <h1 className="welcome-title">
          Welcome to StudyWise,{" "}
          {localStorage.getItem("firstname")[0].toUpperCase() +
            localStorage.getItem("firstname").slice(1)}
          .
        </h1>
        <h3 className="welcome-subtitle">Your Ultimate revision ToolBox</h3>
        {nextEvent && (
          <div className="next-event">
            <h1 className="next-event-header">Next Event:</h1>
            <p className="next-event-title">{nextEvent.eventTitle}</p>
            <p className="next-event-count">
              {Math.floor(
                (new Date(nextEvent.dateTime).getTime() -
                  new Date().getTime()) /
                  86400000
              ) > 1
                ? `${Math.floor(
                    (new Date(nextEvent.dateTime).getTime() -
                      new Date().getTime()) /
                      86400000
                  )} days left`
                : Math.floor(
                    (new Date(nextEvent.dateTime).getTime() -
                      new Date().getTime()) /
                      86400000
                  ) == 1
                ? `${Math.floor(
                    (new Date(nextEvent.dateTime).getTime() -
                      new Date().getTime()) /
                      86400000
                  )} day left`
                : "<1 day left"}
            </p>
          </div>
        )}
        <Link to="/calendar" className="nav-button color-1">
          Check Calendar
        </Link>
        <Link to="/todo" className="nav-button color-4">
          Make a Todo List for today
        </Link>
        <Link to="/pomodoro" className="nav-button color-5">
          Start your revision sprint
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
