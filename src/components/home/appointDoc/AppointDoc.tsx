import MyButton from 'components/common/MyButton';
import { Col, Container, Row } from 'react-bootstrap';
import { ImUsers } from 'react-icons/im';

const AppointDoc = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={6} md={12} className="order-lg-0 order-xl-0  order-1">
            <img
              src="https://save-me.vercel.app/_next/image?url=%2Fimages%2FvideoCall.svg&w=640&q=75"
              alt=""
              width={450}
            />
          </Col>
          <Col
            lg={6}
            md={12}
            className="order-lg-1 order-xl-0  order-0 d-flex  justify-content-center align-items-center"
          >
            <div className="text-start ">
              <h2>
                <span className="text-primary"> Health Care - </span>
                Anytime , Anywhere!
              </h2>
              <p className="">
                We are on a mission to change how healthcare is delivered in
                Bangladesh. We know how daunting getting access to the right
                care can be which is why we focus on turning a doctor visit into
                a delightful experience.Our goal is to make the process
                intuitive for our patients and provide care where ever you are –
                in person or at-home.
              </p>
              <div className="">
                <MyButton
                  icon={<ImUsers size={32} className="text-primary" />}
                  title="Made an"
                  text="Appointment"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppointDoc;
