import { Col } from 'react-bootstrap';
import { ISpecialist } from './_specialists';

const Specialist = ({ photoURL, name }: ISpecialist) => {
  return (
    <Col lg={4} md={6} sm={12}>
      {photoURL}
      <p>{name}</p>
    </Col>
  );
};

export default Specialist;
