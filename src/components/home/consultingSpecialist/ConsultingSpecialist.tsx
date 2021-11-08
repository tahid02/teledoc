import { Container, Row } from 'react-bootstrap';
import Specialist from './Specialist';
import { ISpecialist, specialist } from './_specialists';

const ConsultingSpecialist = () => {
  return (
    <Container>
      <h1>
        Our Consulting <span className="text-primary"> Specialist </span>
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae earum
        aliquid debitis magni vel excepturi sequi nihil maiores, minus nobis?
      </p>
      <Row>
        {specialist().map((data: ISpecialist) => (
          <Specialist {...data} key={data.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ConsultingSpecialist;
