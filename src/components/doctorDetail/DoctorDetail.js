/* eslint-disable camelcase */
import { Container, Col, Row } from 'react-bootstrap';
import BookOrConsult from './BookOrConsult';
import { doctorDetailDummyData } from './_doctorDetailDummyData';
const DoctorDetail = () => {
  // const id = useParam()
  const selectedDoc = doctorDetailDummyData.filter((doctor) => doctor.id === 1);
  const {
    name,
    image,
    BMDC_number,
    experience,
    consultation_fee,
    specialization,
    degree,
    gender,
    department,

    mobile,
    email,
    joining_date,
    status,

    current_address,
    permanent_address,
    birthday,
    work_experience,
    education,
  } = selectedDoc[0];
  return (
    <Container>
      <Row>
        <Col
          xl={4}
          lg={4}
          md={12}
          sm={12}
          xs={12}
          className="bg-white d-flex flex-column align-items-center"
        >
          profile info
          <img src={image} alt="" />
          <span>{name}</span>
          <strong>{degree}</strong>
          <p>{specialization}</p>
          <div className="" style={{ backgroundColor: 'lightgray' }}>
            <div className="d-flex ">
              <span>Status</span>
              <span className="btn-success rounded ms-auto">{status}</span>
            </div>
            <div className="d-flex ">
              <span> BMDC Number</span>
              <span className="">{BMDC_number}</span>
            </div>
            <div className="d-flex ">
              <span> Total Experience</span>
              <span className="">{experience} year</span>
            </div>
            <div className="d-flex ">
              <span> Consultation Fee </span>
              <span className="">{consultation_fee}</span>
            </div>
          </div>
        </Col>
        <Col xl={8} lg={8} md={12} sm={12} xs={12} className="bg-white">
          <Row>
            <Col
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
              className="d-flex flex-column"
            >
              about left side
              <div className="">
                <span>Name </span>
                <span>{name}</span>
              </div>
              <div className="">
                <span>Gender </span>
                <span>{gender}</span>
              </div>
              <div className="">
                <span>Current Address </span>
                <span>{current_address}</span>
              </div>
              <div className="">
                <span>Email </span>
                <span>{email}</span>
              </div>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              about right side
              <div className="">
                <span> Department </span>
                <span>{department} </span>
              </div>
              <div className="">
                <span>Contact No </span>
                <span>{mobile}</span>
              </div>
              <div className="">
                <span> Joining Date</span>
                <span>{joining_date}</span>
              </div>
              <div className="">
                <span>Permanent Address </span>
                <span>{permanent_address}</span>
              </div>
              <div className="">
                <span>BirthDay </span>
                <span>{birthday}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12} className="bg-white">
              experience
              {work_experience.map((experience, index) => (
                <div key={index} className="d-flex flex-column">
                  <h5>{experience.medical_name}</h5>
                  <span>{experience.time}</span>
                  <span>{experience.post}</span>
                </div>
              ))}
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              education
              {education.map((edu, index) => (
                <div key={index} className="d-flex flex-column">
                  <h5>{edu.school_name}</h5>
                  <span>{edu.time}</span>
                </div>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
      <BookOrConsult />
    </Container>
  );
};

export default DoctorDetail;
