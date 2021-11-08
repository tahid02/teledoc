import { Col } from 'react-bootstrap';

const SaveLive = ({
  icon,
  service,
  detail,
}: {
  icon: any;
  service: string;
  detail: string;
}) => {
  return (
    <Col lg={4} md={4} sm={12} className="">
      <div className="">{icon}</div>
      <h3>{service}</h3>
      <p className="">{detail}</p>
    </Col>
  );
};

export default SaveLive;
