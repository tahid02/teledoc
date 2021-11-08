import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container>
      <p className="text-center">teleDoc</p>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
        perspiciatis voluptas nam omnis quibusdam, nesciunt provident dolore
        explicabo commodi consequuntur!
      </p>
      <div className="d-flex  flex-row justify-content-evenly ">
        <div className="links">
          <h4 className="title">Services</h4>
          <p className="link">Book Appointment</p>
          <p className="link">Video Consultation</p>
          <p className="link">Online Covid-19 Care</p>
        </div>
        <div className="d-none d-md-block d-lg-block d-xl-block">
          <h4 className="title">products</h4>
          <p className="link">Ongoing offers</p>
          <p className="link">search by Category</p>
          <p className="link">Online Covid-19 Care</p>
        </div>
        <div className="text-underline">
          <h4 className="title">Contact</h4>
          <p className="link">Book Appointment</p>
          <p className="link">+0102928</p>
          <p className="link">whatsapp</p>
        </div>
      </div>
      <div className="social-links d-flex justify-content-center">
        <span>facebook</span>
        <span className="px-2"> twitter</span>
        <span>linked in</span>
      </div>
      <address className="text-center">Mirpur , Dhaka , Bangladesh</address>
      <p className="rights text-center">
        @{new Date().getFullYear()} all rights reserved by teleDoc
      </p>
    </Container>
  );
};

export default Footer;
