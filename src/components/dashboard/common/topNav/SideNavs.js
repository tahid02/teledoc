/* eslint-disable no-constant-condition */
import { Accordion } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'yellow',
};
// eslint-disable-next-line react/prop-types
const SideNavs = ({ activePage }) => {
  return (
    <div>
      <Accordion defaultActiveKey={activePage} flux>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Patients</Accordion.Header>
          <Accordion.Body>
            <div className="ps-3">
              <div className="">
                <NavLink
                  to="/dashboard/admin/allPatientsPage"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  All patients
                </NavLink>
              </div>
              <div className="">New patients</div>
              <div className="">
                <NavLink
                  to="/dashboard/admin/addPatientPage"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Add patients
                </NavLink>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Doctor</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="/dashboard/admin/allDoctorPage"
                >
                  All Doctor
                </NavLink>{' '}
              </div>
              <div className="">
                <NavLink
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                  to="/dashboard/admin/addDoctorPage"
                >
                  {' '}
                  Add Doctor
                </NavLink>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Appointments</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">View</div>
              <div className="">Book</div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Prescriptions</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">All </div>
              <div className="">New </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Payment</Accordion.Header>
          <Accordion.Body>
            <div className=" ps-3">
              <div className="">
                <NavLink
                  to="/dashboard/admin/allPaymentPage"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  {' '}
                  All Payments
                </NavLink>
              </div>
              <div className="">
                <NavLink
                  to="/dashboard/admin/addPaymentPage"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  {' '}
                  Create invoice
                </NavLink>{' '}
              </div>
              <div className="">
                <NavLink
                  to="/dashboard/admin/patientInvoicePage"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Billing List
                </NavLink>{' '}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SideNavs;
// const [activeKey, setActiveKey] = useState('0');
// const location = useLocation();
// useEffect(() => {
//   const page = location.pathname.split('/')[3];
//   console.log(page);
//   console.log(
//     'true or false',
//     page,
//     page === 'allPatientsPage' || 'addPatientPage'
//   );
//   if (page === 'allPatientsPage' || 'addPatientPage') {
//     console.log('this is allPatientsPage or addPatientPage');
//     setActiveKey('');
//   } else if (page === 'allDoctorPage' || 'addDoctorPage') {
//     setActiveKey('1');
//     console.log('this is alldoctors or add doctor page');
//   } else if (
//     page === 'allPaymentPage' ||
//     'addPaymentPage' ||
//     'patientInvoicePage'
//   ) {
//     console.log('all payments are here');
//     setActiveKey('4');
//   }
// }, [location]);
