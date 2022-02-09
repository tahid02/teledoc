import { Container, Row } from 'react-bootstrap';
import SaveLive from './SaveLive';
import { saveLives } from './_saveLive';

const WeSaveLive = () => {
  return (
    <Container className="py-5">
      <h1>
        We <span className="text-primary">Save</span> Lives
      </h1>
      <p className="">
        Your donation can save the lives of many, make a difference or simply
        make you feel great about your contribution to humanity. Whatever your
        reason, whatever your motivation we welcome you to learn more about
        eligibility and benefits of donating blood with a trusted organization
        like us.
      </p>
      <div className="">
        <Row>
          {saveLives.map((data, index) => (
            <SaveLive {...data} key={index} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default WeSaveLive;
