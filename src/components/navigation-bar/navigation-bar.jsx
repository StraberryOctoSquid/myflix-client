import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavigationBar = ({ user, onLoggedOut }) => {
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">myFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
            {user && (
              <>
                <NavDropdown title="myFlix" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/watch-list">Watch-List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} onClick={onLoggedOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            )}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


