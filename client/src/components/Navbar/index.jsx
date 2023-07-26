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
        <Navbar.Brand href="/"><img src="src/assets/logo.png" alt=""/>
          <p className='brand'>Study<b>Wise</b></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='icon' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav className="ml-auto" activeKey={location.pathname}>
            <NavLink to="/" className='linkStyle' style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
            <NavLink to="/calendar" className='linkStyle' style={({isActive}) => (isActive ? activeStyle : undefined)}>Calendar</NavLink>
            <NavLink to="/todo" className='linkStyle' style={({isActive}) => (isActive ? activeStyle : undefined)}>Todo</NavLink>
            <NavLink to="/pomodoro" className='linkStyle' style={({isActive}) => (isActive ? activeStyle : undefined)}>Pomodoro</NavLink>
            <NavLink to="login" className='linkStyle'>Logout</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />

    </>
  );
}

export default Navigation;
