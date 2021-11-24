import TopNav from 'components/dashboard/common/topNav/TopNav';
import AddPatient from 'components/dashboard/patients/AddPatient';

const AddPatientPage = () => {
  return (
    <div style={{backgroundColor:"lightgray"}}>
      <TopNav />
      <AddPatient />
    </div>
  );
};

export default AddPatientPage;
