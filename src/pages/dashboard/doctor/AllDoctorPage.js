import TopNav from 'components/dashboard/common/topNav/TopNav';
import AllDoctors from 'components/dashboard/doctors/AllDoctors';
const AllDoctorPage = () => {
  return (
    <div>
      <TopNav />
      <div className="text-center">
        this is all doctors page
        <div>
          <AllDoctors />
        </div>
      </div>
    </div>
  );
};

export default AllDoctorPage;
