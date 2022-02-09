import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { GiDoctorFace } from 'react-icons/gi';
const Footer = () => {
  return (
    <Container className="pt-5">
      <h3 className="text-center">teleDoc</h3>
      <p className="text-center">
        Medicines Cure Diseases, But Only Doctors Can Cure Patients Respect Them
        - Carl Jung
      </p>
      <div className="d-flex  flex-row justify-content-evenly text-start">
        <div className="links d-flex flex-column">
          <h4 className="title ">Services</h4>
          <small className="link">Book Appointment</small>
          <small className="link">Video Consultation</small>
          <small className="link">Online Covid-19 Care</small>
        </div>
        <div className="d-none d-md-block d-lg-block d-xl-block d-lg-flex flex-column d-xl-flex">
          <h4 className="title">products</h4>
          <small className="link">Ongoing offers</small>
          <small className="link">search by Category</small>
          <small className="link">Online Covid-19 Care</small>
        </div>
        <div className="text-underline d-flex flex-column">
          <h4 className="title">Contact</h4>
          <small className="link">Book Appointment</small>
          <small className="link">+0102928</small>
          <small className="link">whatsapp</small>
        </div>
      </div>
      <section className=" d-flex justify-content-center align-items-center flex-wrap fs-2   pt-4">
        <FaFacebook className="" style={{ color: '#4267b2' }} />
        <FaTwitterSquare className="fs-2" style={{ color: '#1da1f2' }} />
        <FaLinkedin
          className="w-8 h-8 text-[#0077b5] "
          style={{ color: '#0077b5' }}
        />
      </section>
      <div className="d-flex flex-column justify-content-center">
        <small className="text-center">
          Mirpur, Dhaka 1216, Hoza Street, Bangladesh
        </small>
        <small className="rights text-center">
          @{new Date().getFullYear()} all rights reserved by teleDoc
        </small>
        <small>
          teleDoc is a Open Source WebApp Providing Medical Services
        </small>
      </div>

      <Row className="py-4">
        <Col lg={6} md={6} sm={12} className="pb-3">
          <small>
            Our Goal is To Create Maintain an Open Source Blood Management
            System which connects thousands of blood donors & making Profitable
            Growth by Online Pharmacy (E-Commerce) & Other Facilities.
          </small>
        </Col>
        <Col lg={6} md={6} sm={12} className="pb-3">
          <small>
            We re a Team of 5 Passionate Developers Working Hard Maintaining
            This Project. Our Work is fully Open Sourced & You can checkout
            source codes on github. We hope youll check it out.
          </small>
        </Col>
        <Col lg={6} md={6} sm={12} className="pb-3">
          <small>
            We Provide Medical Services Like Video Consultation, Online COVID_19
            Care Blood Management System. You Can Contact Us Through WhatsApp or
            Our Email Provided On About Section. Thank You!
          </small>
        </Col>
        <Col lg={6} md={6} sm={12} className="pb-3">
          <small>
            Appointments with doctors, expanding customer reach, establishing
            trust and creating awesome convenient user experience for doctors,
            blood donors & ecommerce customers.
          </small>
        </Col>
      </Row>
      <p className="text-center">
        Appreciate Every Doctor Out There Who Saves Us{' '}
        <GiDoctorFace className="text-primary" />
      </p>
    </Container>
  );
};

export default Footer;
