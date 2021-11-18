import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { BiMenuAltLeft } from 'react-icons/bi';
import SideNavs from './SideNavs';

function LeftOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <SideNavs />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LeftOffcanvas;
