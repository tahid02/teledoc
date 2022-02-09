// import {
//   Container,
//   FormControl,
//   InputGroup,
//   Nav,
//   Navbar,
//   Button,
// } from 'react-bootstrap';
// import { MdDashboard } from 'react-icons/md';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="w-100 d-flex justify-content-around">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <form className="d-flex me-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

// <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Container classNameNameName="nav_container">
//     <Navbar.Brand href="#home" classNameNameName="nav_brand">
//       teleDoc
//     </Navbar.Brand>
//     <Navbar.Toggle
//       aria-controls="responsive-navbar-nav"
//       classNameNameName="nav_toggle"
//     />
//     <InputGroup classNameNameName="nav_search">
//       <FormControl
//         placeholder="Recipient's username"
//         aria-label="Recipient's username"
//         aria-describedby="basic-addon2"
//       />
//       <Button variant="outline-secondary" id="button-addon2">
//         Button
//       </Button>
//     </InputGroup>
//     <Navbar.Collapse id="responsive-navbar-nav">
//       <Nav classNameNameName="me-auto">
//         <Nav.Link href="#features">view doctors</Nav.Link>
//         <Nav.Link href="#pricing">search doctors</Nav.Link>
//         <Nav.Link href="#pricing">Blood Request</Nav.Link>
//         <Nav.Link href="#pricing">Sign up</Nav.Link>
//         <Nav.Link href="#pricing">
//           <MdDashboard />
//           Dashboard
//         </Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
