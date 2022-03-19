/* eslint-disable no-unused-vars */
// bg #ecf0f4
// search bg #ebebee
// header bg #ffffff
// table bottom border color #e0e0e0
import {
  Breadcrumb,
  Dropdown,
  DropdownButton,
  Table,
  Button,
  Pagination,
} from 'react-bootstrap';
import { allPatientsDummyData } from './_allPatientsDummyData';
import { FaHome } from 'react-icons/fa';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import TooltipText from 'components/dashboard/common/TooltipText';
import { selectedPagesNo, initialPageNo } from 'utils/paginationPage';
import './allparents.css';
import PatientTRow from './PatientTRow';
const AllPatients = () => {
  const [showedPatientsNo, setShowedPatientsNo] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [patientsShowed, setPatientsShowed] = useState(
    allPatientsDummyData.slice(0, 10)
  );

  const [pages, setPages] = useState(
    initialPageNo(allPatientsDummyData.length)
  );

  const handleSelect = (e) => {
    console.log(e);
    setShowedPatientsNo(() => parseInt(e));
    setPatientsShowed(() => allPatientsDummyData.slice(0, parseInt(e)));
    setPages(selectedPagesNo(allPatientsDummyData.length, e));
  };

  // console.log({ pages });

  const handlePageClicked = (pageNo) => {
    setActivePage(pageNo);
    console.log({ pageNo });
    const showPatientsStart = (pageNo - 1) * showedPatientsNo;
    const showPatientsEnd = pageNo * showedPatientsNo;
    setPatientsShowed(
      allPatientsDummyData.slice(showPatientsStart, showPatientsEnd)
    );
  };
  // console.log({ activePage });

  // console.log({ patientsShowed });
  return (
    <section className="p-4">
      <section className="d-flex justify-content-start align-items-center">
        <h3 className="borderRight pe-1">View Patients </h3>
        <div className="ps-3">
          <Breadcrumb className="text-center">
            {/* <Breadcrumb.Item as={Link} to="/">Home </Breadcrumb.Item> */}
            <Breadcrumb.Item href="#">
              <FaHome /> Home{' '}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Library </Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              {' '}
              Data
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </section>

      <section
        className="all-patients px-3 pt-4 pb-0"
        style={{ backgroundColor: 'white', borderRadius: '1%' }}
      >
        <div
          className="d-flex align-items-center flex-wrap table-head px-4 py-2 rounded-3  "
          style={{ backgroundColor: 'gray' }}
        >
          <div className="me-auto d-flex flex-wrap">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search patient"
              />
            </div>
          </div>
          <div className="new">
            <button className="btn  rounded p-0">
              <TooltipText text="add new patient" position="left">
                <Button variant="transparent">
                  <AiFillPlusCircle size={32} />{' '}
                </Button>
              </TooltipText>
            </button>
          </div>
        </div>
        <div className="table-body pt-2 px-4">
          <Table responsive="lg">
            <thead>
              <tr>
                <th>image</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Birth Date</th>
                <th>Blood Group</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patientsShowed.map((patientData) => {
                return (
                  <PatientTRow patientData={patientData} key={patientData.id} />
                );
              })}
            </tbody>
          </Table>
        </div>
        <div className="table-footer d-flex justify-content-end align-items-center">
          <div className="item-no">
            {' '}
            items per page :
            <DropdownButton
              title={showedPatientsNo}
              id="dropdown-item-button"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="10" className="text-center">
                10
              </Dropdown.Item>
              <Dropdown.Item eventKey="20" className="text-center">
                20
              </Dropdown.Item>
              <Dropdown.Item eventKey="50" className="text-center">
                {' '}
                50
              </Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="pagination">
            <Pagination>
              {pages.map((pageNo) => (
                <Pagination.Item
                  key={pageNo}
                  active={pageNo === activePage}
                  onClick={() => handlePageClicked(pageNo)}
                >
                  {pageNo}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AllPatients;
