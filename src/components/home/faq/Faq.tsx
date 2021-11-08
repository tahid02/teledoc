import { Col, Container, Row } from 'react-bootstrap';
import QuesAndAns from './QuesAndAns';
import { quesAndAns } from './_quesAndAns';

const Faq = () => {
  return (
    <Container>
      <h2>
        Frequently Asked <span className="text-primary">Questions </span>
      </h2>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        repellendus ipsa cumque iure a magni fugit tempore. Accusamus,
        accusantium sit.
      </p>
      <Row>
        <Col lg={6} md={12} sm={12}>
          image
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="d-flex align-items-start flex-column ">
            {quesAndAns().map((qna, index) => (
              <QuesAndAns {...qna} key={index} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
