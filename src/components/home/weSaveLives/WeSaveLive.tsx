import { Container, Row } from 'react-bootstrap';
import SaveLive from './SaveLive';
import { saveLives } from './_saveLive';

const WeSaveLive = () => {
  return (
    <Container>
      <h1>We Save Lives</h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum maiores
        est earum minus! Placeat similique odit magnam ex doloribus unde
        perspiciatis, molestias saepe aspernatur, suscipit quia animi incidunt
        porro mollitia.
      </p>
      <Row>
        {saveLives().map(
          (data: { icon: any; service: string; detail: string }) => (
            <SaveLive {...data} key={Math.random()} />
          )
        )}
      </Row>
    </Container>
  );
};

export default WeSaveLive;
