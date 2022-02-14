import { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';
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
      setActivePage('0');
    }
    if (page === 'allDoctorPage' || page === 'addDoctorPage') {
      setActivePage('1');
    }
    if (
      page === 'allPaymentPage' ||
      page === 'addPaymentPage' ||
      page === 'patientInvoicePage'
    ) {
      setActivePage('4');
    }
  }, []);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <BiMenuAltLeft />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideNavs activePage={activePage} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LeftOffcanvas;
