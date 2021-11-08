import MyButton from 'components/common/MyButton';
import { Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <div className="div">
              <h2>
                Consult A Doctor Anytime By{' '}
                <span className="text-primary"> Video Call </span>
              </h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatem hic explicabo consequatur qui non labore aut nostrum
                soluta distinctio. Numquam!
              </p>
              <div className="d-flex flex-wrap justify-content-evenly">
                <MyButton icon="human" title="doctor" text="Available Now" />
                <MyButton icon="doctor" title="Sign up" text="As Doctor" />
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            image
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
