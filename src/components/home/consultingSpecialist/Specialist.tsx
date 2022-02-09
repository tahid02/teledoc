import { Col } from 'react-bootstrap';
import { ISpecialist } from './_specialists';

const Specialist = ({ photoURL, name }: ISpecialist) => {
  return (
    <Col lg={3} md={4} sm={6} xs={6}>
      <img src={photoURL} alt="" style={{ width: '5rem' }} />
      <p>{name}</p>
    </Col>
  );
};

export default Specialist;
