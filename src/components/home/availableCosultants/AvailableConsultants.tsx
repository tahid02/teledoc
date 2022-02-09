import Consultant from 'components/common/Consultant';

import { Container, Row } from 'react-bootstrap';
import { availableConsultants, IConsultant } from './_availableConsultants';

const AvailableConsultants = () => {
  return (
    <Container className="py-5">
      <h5 className="text-start text-bold">Available for consultation now</h5>
      <Row>
        {availableConsultants.map((consultant: IConsultant) => (
          <Consultant {...consultant} key={consultant._id} />
        ))}
      </Row>
    </Container>
  );
};

export default AvailableConsultants;
