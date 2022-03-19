import MyButton from 'components/common/MyButton';
import { Col, Container, Row } from 'react-bootstrap';
import { FaUserEdit } from 'react-icons/fa';
import { ImUsers } from 'react-icons/im';
const Banner = () => {
  return (
    <section className="py-5 ">
      <Container>
        <Row>
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-start">
              <h2 className="display-4 fw-bold ">
                Consult A Doctor Anytime By{' '}
                <span className="text-primary underlined"> Video Call </span>
              </h2>
              <p className="">
                We follow a strict verification process for every doctor
                providing online medical services On SAVE ME. Our team manually
                verifies necessary documents, registrations, and certifications
                for every doctor!
              </p>
              <div className="d-flex flex-wrap justify-content-start">
                <div className="me-2">
                  <MyButton
                    icon={<ImUsers size={32} className="text-primary" />}
                    title="doctor"
                    text="Available Now"
                  />
                </div>

                <div className="">
                  <MyButton
                    icon={<FaUserEdit size={32} className="text-primary" />}
                    title="Sign up"
                    text="As Doctor"
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <img
              src="https://save-me.vercel.app/_next/image?url=%2Fimages%2FConsultation.svg&w=640&q=75"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
