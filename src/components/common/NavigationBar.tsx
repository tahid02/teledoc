import {
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  Button,
} from 'react-bootstrap';
import { MdDashboard } from 'react-icons/md';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="nav_container">
        <Navbar.Brand href="#home" className="nav_brand">
          teleDoc
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="nav_toggle"
        />
        <InputGroup className="nav_search">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">view doctors</Nav.Link>
            <Nav.Link href="#pricing">search doctors</Nav.Link>
            <Nav.Link href="#pricing">Blood Request</Nav.Link>
            <Nav.Link href="#pricing">Sign up</Nav.Link>
            <Nav.Link href="#pricing">
              <MdDashboard />
              Dashboard
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
