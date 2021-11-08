import MyButton from 'components/common/MyButton';
import { Col, Container, Row } from 'react-bootstrap';

const AppointDoc = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={6} md={12} className="order-lg-0 order-xl-0  order-1">
            image
          </Col>
          <Col lg={6} md={12} className="order-lg-1 order-xl-0  order-0">
            <div className="div">
              <h2>
                <span className="text-primary"> Health Care - </span>
                Anytime , Anywhere!
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem hic explicabo consequatur qui non labore aut nostrum
                soluta distinctio. Numquam!
              </p>
              <div className="d-flex justify-content-center">
                <MyButton icon="human" title="Made an" text="Appointment" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppointDoc;
