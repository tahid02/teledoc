import { IConsultant } from 'components/home/availableCosultants/_availableConsultants';
import { Col } from 'react-bootstrap';
import { rating } from './Rating';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const Consultant = ({
  __v,
  _id,
  bloodGroup,
  bmdcNumber,
  consultationFee,
  degrees,
  eligibility,
  email,
  followUpFee,
  isVerifiedDoctor,
  location,
  name,
  password,
  phoneNumber,
  profilePic,
  role,
  speciality,
  totalExperienceYears,
}: IConsultant) => {
  return (
    <Col lg={3} md={6} sm={6} xs={12} className="pb-3  text-start">
      <div className="card-deck" style={{ position: 'relative' }}>
        <div className="card">
          <img className="card-img-top" src={profilePic} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <small className="fs-6">{degrees[0]}</small>
            <p className="mb-0">{rating}</p>
            <small className="">{speciality[0]}</small>
          </div>
          <div
            className=" text-start d-flex flex-row flex-nowrap align-items-center"
            style={{ padding: ' .5rem 1rem' }}
          >
            <div className="d-flex flex-column text-start">
              <h1 className="mb-0 ">৳{consultationFee} </h1>
              <small>per consultation</small>
            </div>
            <div className="ms-auto cursor-pointer">
              <BsArrowRightCircleFill size={32} />
            </div>
          </div>
        </div>
        {/* use this to design like this  codepen https://codepen.io/tahid02/pen/abVZWRQ?editors=1100  */}
        {/* <div
          className="scudo"
          style={{
            position: 'absolute',
            bottom: '0px',
            height: '10%',
            width: '110%',
            left: '-10%',
            backgroundColor: 'red',
          }}
        ></div> */}
      </div>
    </Col>
  );
};

export default Consultant;
