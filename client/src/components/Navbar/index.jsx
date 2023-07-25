import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Outlet } from "react-router-dom"
import "./styles.css";

function Navigation() {
  
  let activeStyle = {
    textDecoration: "underline"
  };

  return (
    <>
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="src/assets/logo.png" alt=""/>
          <p className='brand'>Study<b>Wise</b></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='icon' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav className="ml-auto" activeKey={location.pathname}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/todo">Todo</Nav.Link>
            <Nav.Link href="/pomodoro">Pomodoro</Nav.Link>
            <Nav.Link href="login">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  );
}

export default Navigation;
