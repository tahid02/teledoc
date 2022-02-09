import { Col } from 'react-bootstrap';

const SaveLive = ({
  icon,
  service,
  detail,
  iconColor,
}: {
  icon: any;
  service: string;
  detail: string;
  iconColor: string;
}) => {
  return (
    <Col lg={4} md={4} sm={12} className="">
      <div className="" style={{ color: `${iconColor}`, fontSize: '3rem' }}>
        {icon}
      </div>
      <h4 className="mb-0">{service}</h4>
      <p className="">{detail}</p>
    </Col>
  );
};

export default SaveLive;
