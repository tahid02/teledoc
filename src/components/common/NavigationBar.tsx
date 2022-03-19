// import {
//   Container,
//   FormControl,
//   InputGroup,
//   Nav,
//   Navbar,
//   Button,
// } from 'react-bootstrap';
// import { MdDashboard } from 'react-icons/md';

import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { RiMenu2Line } from 'react-icons/ri';

const NavigationBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: 'rgb(246 245 244)' }}
    >
      <div className="container">
        <div className="w-100 d-flex justify-content-around">
          <a className="navbar-brand" href="#">
            <Link to="/">
              <img
                src="https://i.ibb.co/CQYg6Lt/teledoc-logo-modified.jpg"
                className="w-100"
              ></img>
            </Link>
          </a>
          <div className="d-flex me-2 " style={{ width: '50%' }}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                borderRight: 'none',
                borderRadius: '10px 0px 0px 10px',
              }}
            />
            <button
              className="btn btn-primary"
              style={{
                borderColor: 'black',
                border: 'none',
                borderRadius: '0px 10px 10px 0px',
              }}
              type="submit"
            >
              <BsSearch />
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <RiMenu2Line />
            </span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="viewDoctors">view Doctors </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="search-donors">search Donors </Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="blood-request">Blood Request </Link>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to="login-signup">login or signup </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <MdDashboard size={25} />
                <Link to="dashboard/admin/allDoctorPage">Dashboard</Link>
              </a>
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
