import { Col } from 'react-bootstrap';

export interface IConsultant {
  id: number;
  name: string;
  isOnline: boolean;
  profilePic: string;
  bio: string;
  special: string[];
  consultationFee: number;
  followUpFee: number;
  degrees: string[];
  rating: number;
  conversations?: string;
  communication?: object[];
}

const Consultant = ({
  name,
  isOnline,
  profilePic,
  bio,
  special,
  consultationFee,
  degrees,
  rating,
}: IConsultant) => {
  return (
    <Col lg={4} md={6} sm={12}>
      <p>{profilePic}</p>
      <p>{isOnline}</p>
      <p>{bio}</p>
      <p>{special?.[0]}</p>
      <p>{degrees?.[0]}</p>
    </Col>
  );
};

export default Consultant;
