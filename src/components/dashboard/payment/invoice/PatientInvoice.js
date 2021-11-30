/* eslint-disable camelcase */
import { Container, Breadcrumb, Table } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { AiFillPrinter } from 'react-icons/ai';

import { allPatientsDummyData } from 'components/dashboard/patients/_allPatientsDummyData';
const PatientInvoice = () => {
  const invoiceData = allPatientsDummyData[22];
  const { id, patient_name, patient_address, patient_visit_data } = invoiceData;
  const {
    payment: {
      word_no,
      payment_date,
      bill_no,
      status,
      doctor_cost,
      medicine,
      xray,
      MRI,
      others,
      payment_method,
    },
  } = patient_visit_data[0];
  const costs = [
    [...doctor_cost, 'doctor'],
    [...medicine, 'medicine'],
    [...xray, 'xray'],
    [...MRI, 'MRI'],
    others,
  ];
  console.log({ invoiceData });
  return (
    <Container>
      <section className="d-flex justify-content-start align-items-center my-4">
        <h3 className="">Invoice | </h3>
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

      <section>
        <div className="d-flex">
          <h3>INVOICE </h3>
          <h5 className="ms-auto">{bill_no} </h5>
          <hr />
        </div>
        <div className="patient-invoice-info d-flex flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row">
          <div className="hospital-info me-auto d-flex flex-column align-items-start">
            <h3>teledoc</h3>
            <p>
              D 103, teledoc <br />
              oop,town hall, <br />
              Dalas er Road, <br />
              Motijheel, Dhaka
            </p>
          </div>
          <div className="patient-info ms-auto d-flex flex-column align-items-end">
            BILL TO: <strong> {patient_name}</strong>
            <br />
            {patient_address}
            <br />
            <div>
              {' '}
              <strong>word no:</strong>
              {word_no}{' '}
            </div>
            <div>
              {' '}
              <strong>Invoice Date:</strong>
              {payment_date}{' '}
            </div>
          </div>
        </div>
        <div className="table-body pt-2 px-4">
          <Table responsive="lg">
            <thead>
              <tr>
                <th>#</th>
                <th>Detail </th>
                <th>Quantity</th>
                <th nowrap="nowrap">Unit Cost</th>
                <th>Charges</th>
                <th>Discount </th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {costs?.map((cost, index) => {
                return (
                  <tr
                    key={id}
                    style={{
                      borderBottomWidth: '1px',
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'gray',
                    }}
                  >
                    <td>{index + 1}</td>
                    <td> {cost[3] || 'others' || ' - '} </td>
                    <td> {cost[0] || ' - '} </td>
                    <td> {cost[1] || ' - '} </td>
                    <td> {cost[0] * cost[1] || ' - '} </td>
                    <td>{cost[2] || ' - '}</td>
                    <td>{cost[0] * cost[1] - cost[2] || cost || ' - '}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <div className="d-flex flex-column justify-content-end align-items-end">
          <div>Sub Total : $2900</div>
          <div>
            vat:<strong></strong> 10%{' '}
          </div>
          <div>
            <h3>Total : $3210</h3>{' '}
          </div>
          <div>Method :{payment_method}</div>
          <div>
            Status: <strong>{status}</strong>{' '}
          </div>
          <hr />
          <button className="btn btn-success">
            <AiFillPrinter /> print{' '}
          </button>
        </div>
      </section>
    </Container>
  );
};

export default PatientInvoice;
