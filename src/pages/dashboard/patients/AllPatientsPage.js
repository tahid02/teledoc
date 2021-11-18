import TopNav from 'components/dashboard/common/topNav/TopNav';
import AllPatients from 'components/dashboard/patients/AllPatients';

const AllPatientsPage = () => {
  return (
    <section style={{ backgroundColor: 'lightGray' }}>
      <TopNav />
      <div className="text-center">
        <div>
          <AllPatients />
        </div>
      </div>
    </section>
  );
};

export default AllPatientsPage;
