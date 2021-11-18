import { Accordion } from 'react-bootstrap';

const SideNavs = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0" flux>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Patients</Accordion.Header>
          <Accordion.Body>
            <div className="ps-3">
              <div className="">All patients</div>
              <div className="">New patients</div>
              <div className="">Add patients</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Doctor</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">All Doctor</div>
              <div className="">Add Doctor</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Doctor</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">All Doctor</div>
              <div className="">Add Doctor</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Appointments</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">View</div>
              <div className="">Book</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Prescriptions</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">All </div>
              <div className="">New </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Payment</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">Create invoice </div>
              <div className="">Billing List</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SideNavs;
