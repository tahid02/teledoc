import { Container, Col, Row } from 'react-bootstrap';
import BookOrConsult from './BookOrConsult';
const DoctorDetail = () => {
  return (
    <Container>
      <Row>
        <Col xl={4} lg={4} md={12} sm={12} xs={12}>
          profile info
        </Col>
        <Col xl={8} lg={8} md={12} sm={12} xs={12}>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              about left side
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              about right side
            </Col>
          </Row>
          <Row>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              experience
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} xs={12}>
              education
            </Col>
          </Row>
        </Col>
      </Row>
      <BookOrConsult />
    </Container>
  );
};

export default DoctorDetail;
