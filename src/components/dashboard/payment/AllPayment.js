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
import { allPatientsDummyData } from '../patients/_allPatientsDummyData';
import { FaEdit, FaHome } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';
import TooltipText from 'components/dashboard/common/TooltipText';
import { selectedPagesNo, initialPageNo } from 'utils/paginationPage';

const searchStyle = {
  search: (base) => ({
    ...base,
    '&:focus': {
      border: 'none',
    },
  }),
};

const AllPayment = () => {
  const [showedPatientsNo, setShowedPatientsNo] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [patientsShowed, setPatientsShowed] = useState(
    allPatientsDummyData.slice(0, 10)
  );

  const [pages, setPages] = useState(
    initialPageNo(allPatientsDummyData.length)
  );

  const handleSelect = (e) => {
    // console.log(e);
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
        <h3 className="">View Payments | </h3>
        <div className="">
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
          className="d-flex flex-wrap table-head p-2 rounded-3  "
          style={{ backgroundColor: 'gray' }}
        >
          <div className="me-auto d-flex flex-wrap">
            <span className="my-4">Payments </span>
            <input
              type="text"
              className="border-0"
              style={searchStyle.search({
                borderTopLeftRadius: '5px',
                borderBottomLeftRadius: '5px',
              })}
            />
            <button
              className="border-0"
              style={searchStyle.search({
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
              })}
            >
              search
            </button>
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
                <th>id</th>
                <th>image</th>
                <th>Patient Name</th>
                <th>Doctor Name</th>
                <th>Charges</th>
                <th>Date</th>
                <th>Tax</th>
                <th>Discount</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {patientsShowed.map((patientData) => {
                return (
                  <tr
                    key={patientData.id}
                    style={{
                      borderBottomWidth: '1px',
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'gray',
                    }}
                  >
                    <td>{patientData.id}</td>
                    <td style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                      <img
                        src={patientData.patient_image}
                        className="rounded"
                      />{' '}
                    </td>
                    <td>{patientData.patient_name}</td>
                    <td>
                      {patientData.patient_visit_data[0].patient_visited_doctor}
                    </td>
                    <td>
                      {
                        patientData.patient_visit_data[0]
                          .patient_treatment_charges
                      }
                    </td>
                    <td>
                      {patientData.patient_visit_data[0].patient_admit_date}
                    </td>
                    <td>
                      {patientData.patient_visit_data[0].patient_visit_tax}
                    </td>
                    <td>
                      {patientData.patient_visit_data[0].patient_visit_discount}
                    </td>
                    <td>
                      {patientData.patient_visit_data[0].patient_total_charge}
                    </td>

                    <td>
                      <button className="btn  rounded p-0">
                        <TooltipText text="edit" position="bottom">
                          <Button variant="transparent">
                            <FaEdit className="text-success" size={25} />
                          </Button>
                        </TooltipText>
                      </button>
                      <button className="btn  rounded p-0">
                        <TooltipText text="delete" position="bottom">
                          <Button variant="transparent">
                            <MdDelete className="text-danger" size={25} />
                          </Button>
                        </TooltipText>
                      </button>
                    </td>
                  </tr>
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

export default AllPayment;
