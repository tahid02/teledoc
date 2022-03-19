import { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';
import SideNavs from './SideNavs';

function LeftOffcanvas() {
  const [show, setShow] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [activePage, setActivePage] = useState(null);
  const location = useLocation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const page = location.pathname.split('/')[3];
  console.log('location', location.pathname);
  useEffect(() => {
    if (page === 'allPatientsPage' || page === 'addPatientPage') {
      setActivePage('patient');
    }
    if (page === 'allDoctorPage' || page === 'addDoctorPage') {
      setActivePage('doctor');
    }
    if (
      page === 'allPaymentPage' ||
      page === 'addPaymentPage' ||
      page === 'patientInvoicePage'
    ) {
      setActivePage('payment');
    }
  }, []);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <RiMenuUnfoldFill />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="bg-gray"
        // style={{ backgroundColor: '#374151' }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link to="/">
              <img
                src="https://i.ibb.co/CQYg6Lt/teledoc-logo-modified.jpg"
                className="w-100"
              ></img>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideNavs activePage={activePage} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LeftOffcanvas;
