// import Footer from 'components/common/footer/Footer';
// import NavigationBar from 'components/common/NavigationBar';
import FilterDoctors from 'components/viewDoctors/FilterDoctors';
import { Container } from 'react-bootstrap';

const ViewDoctors = () => {
  return (
    <Container>
      {/* <NavigationBar /> */}
      <FilterDoctors />
      {/* <Footer /> */}
    </Container>
  );
};

export default ViewDoctors;
