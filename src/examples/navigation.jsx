import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <div>
      <Navbar fixed="top" expand="md">
        <Navbar.Brand>Responsive Web app</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <NavDropdown
              title="Dropdown"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item>
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#">Link Right</Nav.Link>
            <Nav.Link href="#">Link Right</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
