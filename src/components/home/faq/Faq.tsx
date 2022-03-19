import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import QuesAndAns from './QuesAndAns';
import { quesAndAns } from './_quesAndAns';

const Faq = () => {
  const [show, setShow] = useState<number | null>(null);
  const toggle = (id: number) => {
    if (show === id) {
      // if show question is already active, then close it
      return setShow(null);
    }

    setShow(id);
  };

  console.log({ show });
  return (
    <section className=" py-5 mt-5 bg-gray">
      <Container>
        <h2>
          Frequently Asked <span className="text-primary">Questions </span>
        </h2>
        <p className="">
          A Frequently Asked Questions (FAQ) Forum is Often Used In Articles,
          Websites, Email, Lists And Online Forums Where Common Questions Tend
          To Occur !
        </p>
        <Row className="pt-4">
          <Col lg={6} md={12} sm={12}>
            <img
              src="https://save-me.vercel.app/_next/image?url=%2Fimages%2FFAQs.svg&w=640&q=75"
              alt=""
              className="w-75"
            />
          </Col>
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex align-items-center justify-content-center "
            style={{ position: 'relative' }}
          >
            <div className="" style={{ position: 'absolute', width: '80%' }}>
              {quesAndAns().map((qna, index) => (
                <QuesAndAns {...qna} key={index} toggle={toggle} show={show} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
