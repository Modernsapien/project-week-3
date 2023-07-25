import "./style.css";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="dashboard-body-container">
      <img
        src="src/assets/revision-img.jpeg"
        alt="study-pic"
        className="study-pic"
      />
      <div className="directory-section">
        <h1 className="welcome-title">Welcome to StudyWise.</h1>
        <h3 className="welcome-subtitle">Your Ultimate revision ToolBox</h3>
        <Link to="/calendar">Check Calendar</Link>
        <Link to="/todo">Make a Todo List for today</Link>
        <Link to="/pomodoro">Start your revision sprint</Link>
      </div>
    </div>
  );
}

export default Dashboard;
