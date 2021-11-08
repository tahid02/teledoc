import Consultant, { IConsultant } from 'components/common/Consultant';
import { Container, Row } from 'react-bootstrap';
import { availableConsultants } from './_availableConsultants';

const AvailableConsultants = () => {
  return (
    <Container>
      <p>Available for consultation now</p>
      <Row>
        {availableConsultants().map((consultant: IConsultant) => (
          <Consultant {...consultant} key={consultant.id} />
        ))}
      </Row>
    </Container>
  );
};

export default AvailableConsultants;
