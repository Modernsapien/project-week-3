import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./styles.css";

function Navigation() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <img src="src/assets/logo.png" alt="" />
            <p className="brand">
              Study<b>Wise</b>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="icon"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="ml-auto" activeKey={location.pathname}>
              <Link to="/">Home</Link>
              <Link to="/calendar">Calendar</Link>
              <Link to="/todo">Todo</Link>
              <Link to="/pomodoro">Pomodoro</Link>
              <Link to="login">Logout</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navigation;
