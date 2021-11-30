import { useRef } from 'react';
import { Table } from 'react-bootstrap';
import { allDoctorsDummyData } from './_allDoctorsDummyData';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
const AllDoctor = () => {
  const searchRef = useRef(null);
  const onSearchClicked = () => {
    console.log(searchRef.current.value);
  };
  return (
    <section className="">
      <div className="">View Doctors</div>
      <div className="all-patients">
        <div className="d-flex head">
          <div className="me-auto d-flex">
            <span className="">Doctors </span>
            <input type="text" ref={searchRef} />
            <button onClick={onSearchClicked}>search</button>
          </div>
          <div className="new">add Doctors</div>
        </div>
        <div className="body">
          <Table responsive="lg">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Department</th>
                <th>Specialization </th>
                <th>Degree</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Joining Date</th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {allDoctorsDummyData.map((doctorData) => {
                return (
                  <tr
                    key={doctorData.id}
                    className={{
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'black',
                    }}
                  >
                    <td>
                      <img src={doctorData.doctor_image} />{' '}
                    </td>
                    <td>{doctorData.name}</td>
                    <td>{doctorData.department}</td>
                    <td>{doctorData.specialization}</td>
                    <td>{doctorData.degree}</td>
                    <td
                      nowrap="nowrap"
                      // className={{ whiteSpace: 'nowrap', overflowX: 'scroll' }}
                    >
                      {doctorData.mobile}
                    </td>
                    <td>{doctorData.email}</td>
                    <td>{doctorData.joining_date}</td>
                    <td>
                      <button className="btn btn-success">
                        <FaEdit />
                      </button>
                      <button className="btn btn-danger">
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default AllDoctor;
