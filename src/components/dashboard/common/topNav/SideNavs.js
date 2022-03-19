/* eslint-disable no-constant-condition */
import { FaHome } from 'react-icons/fa';
import { MdAccountCircle } from 'react-icons/md';
// import { NavLink } from 'react-router-dom';
import SideAccordionItemBody from './SideAccordionItemBody';
import AccordionHead from './AccordionHead';
import './sidenav.css';
import SideNavLink from './SideNavLink';
// const activeStyle = {
//   color: 'black',
//   backgroundColor: 'lightgray',
//   display: 'block',
//   padding: ' 10px 0px 10px 10px',
//   borderRadius: '5px',
// };
// eslint-disable-next-line react/prop-types
const SideNavs = ({ activePage }) => {
  console.log({ activePage });
  return (
    <div className="d-flex flex-column align-items-start h-100 w-100">
      <div className="w-100 rounded-3">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item   " style={{ borderRadius: '10px' }}>
            <AccordionHead title="patient" itemNo="One" />
            <SideAccordionItemBody
              activePage={activePage}
              accordionItemName="patient"
              itemNo="One"
            >
              <SideNavLink route="/dashboard/admin/allPatientsPage">
                All patients
              </SideNavLink>
              <div className="">New patients</div>

              <SideNavLink route="/dashboard/admin/addPatientPage">
                Add patients
              </SideNavLink>
            </SideAccordionItemBody>
          </div>

          <div className="accordion-item   " style={{ borderRadius: '10px' }}>
            <AccordionHead title="Doctor" itemNo="Two" />
            <SideAccordionItemBody
              activePage={activePage}
              accordionItemName="doctor"
              itemNo="Two"
            >
              <SideNavLink route="/dashboard/admin/allDoctorPage">
                All Doctor
              </SideNavLink>{' '}
              <SideNavLink route="/dashboard/admin/addDoctorPage">
                {' '}
                Add Doctor
              </SideNavLink>
            </SideAccordionItemBody>
          </div>

          <div className="accordion-item   " style={{ borderRadius: '10px' }}>
            <AccordionHead title="Payment" itemNo="Three" />
            <SideAccordionItemBody
              activePage={activePage}
              accordionItemName="payment"
              itemNo="Three"
            >
              <SideNavLink route="/dashboard/admin/allPaymentPage">
                {' '}
                All Payments
              </SideNavLink>
              <SideNavLink route="/dashboard/admin/addPaymentPage">
                {' '}
                Create invoice
              </SideNavLink>{' '}
              <SideNavLink route="/dashboard/admin/patientInvoicePage">
                Billing List
              </SideNavLink>{' '}
            </SideAccordionItemBody>
          </div>
        </div>
      </div>
      <div className="mt-auto  w-100">
        <div className=" bg-gray shadow rounded-3 ps-3 py-2 mb-2 hover-bg-gray ">
          <FaHome />
          Home
        </div>
        <div className=" bg-gray shadow rounded-3 ps-3 py-2 hover-bg-gray">
          <MdAccountCircle size={21} /> Account
        </div>
      </div>
    </div>
  );
};

export default SideNavs;
