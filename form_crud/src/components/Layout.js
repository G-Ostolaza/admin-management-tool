import React from 'react';
import { Navbar , Nav} from 'react-bootstrap'
import { Container } from 'react-bootstrap';


export default function Layout() {
  
  return (
    <React.Fragment>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Admin System</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="adduser">Add User</Nav.Link>
            <Nav.Link href="userinfo">User Database</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}
