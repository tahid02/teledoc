import Home from 'pages/Home';
// import SearchDonorsPage from 'pages/SearchDonorsPage';
// import ViewDoctors from 'pages/ViewDoctors';
// import DoctorDetailPage from 'pages/DoctorDetailPage';
// import RequestBloodPage from 'pages/RequestBloodPage';

import { Route, Routes } from 'react-router-dom';

/// DASHBOARD COMPONENTS
import AllPatientsPage from 'pages/dashboard/patients/AllPatientsPage';
import AddPatientPage from 'pages/dashboard/patients/AddPatientPage';
import AllDoctorPage from 'pages/dashboard/doctor/AllDoctorPage';
import AddDoctorPage from 'pages/dashboard/doctor/AddDoctorPage';
import AllPaymentPage from 'pages/dashboard/payment/AllPaymentPage';
import AddPaymentPage from 'pages/dashboard/payment/AddPaymentPage';
import PatientInvoicePage from 'pages/dashboard/payment/PatientInvoicePage';

const AppRouter = () => {
  return (
    <>
      {/* <Home /> */}
      {/* <ViewDoctors /> */}
      {/* <SearchDonorsPage /> */}
      {/* <DoctorDetailPage /> */}
      {/* <RequestBloodPage /> */}
      {/* dashboard  */}
      {/* <AllPatientsPage /> */}
      {/* <AddPatientPage /> */}
      {/* <AllDoctorPage /> */}
      {/* <AddDoctorPage /> */}
      {/* <AllPaymentPage /> */}
      {/* <AddPaymentPage /> */}
      {/* <PatientInvoicePage /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="dashboard/admin/allPatientsPage"
          element={<AllPatientsPage />}
        />
        <Route
          path="dashboard/admin/addPatientPage"
          element={<AddPatientPage />}
        />
        <Route
          path="dashboard/admin/allDoctorPage"
          element={<AllDoctorPage />}
        />
        <Route
          path="dashboard/admin/addDoctorPage"
          element={<AddDoctorPage />}
        />
        <Route
          path="dashboard/admin/allPaymentPage"
          element={<AllPaymentPage />}
        />
        <Route
          path="dashboard/admin/addPaymentPage"
          element={<AddPaymentPage />}
        />
        <Route
          path="dashboard/admin/patientInvoicePage"
          element={<PatientInvoicePage />}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
