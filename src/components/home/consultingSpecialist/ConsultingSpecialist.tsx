import { Container, Row } from 'react-bootstrap';
import Specialist from './Specialist';
import { ISpecialist, specialist } from './_specialists';

const ConsultingSpecialist = () => {
  return (
    <Container className="py-5">
      <h1>
        Our Consulting <span className="text-primary"> Specialist </span>
      </h1>
      <p>
        Ask a Doctor Online & Get Quick Medical Advice For Your Health Queries.
        Our Medical Panel Consists Of Over 3500+ Doctors From 80+ Specialities
      </p>
      <Row>
        {specialist.map((data: ISpecialist) => (
          <Specialist {...data} key={data.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ConsultingSpecialist;
