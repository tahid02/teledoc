import Footer from 'components/common/footer/Footer';
import AppointDoc from 'components/home/appointDoc/AppointDoc';
import AvailableConsultants from 'components/home/availableCosultants/AvailableConsultants';
import ConsultingSpecialist from 'components/home/consultingSpecialist/ConsultingSpecialist';
import Faq from 'components/home/faq/Faq';
import Header from 'components/home/header/Header';
import WeSaveLive from 'components/home/weSaveLives/WeSaveLive';

const Home = () => {
  return (
    <>
      <Header />
      <AppointDoc />
      <WeSaveLive />
      <AvailableConsultants />
      <ConsultingSpecialist />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
