import Home from 'pages/Home';
// import DoctorDetailPage from 'pages/DoctorDetailPage';

import { Route, Routes } from 'react-router-dom';

/// DASHBOARD COMPONENTS
import AllPatientsPage from 'pages/dashboard/patients/AllPatientsPage';
import AddPatientPage from 'pages/dashboard/patients/AddPatientPage';
import AllDoctorPage from 'pages/dashboard/doctor/AllDoctorPage';
import AddDoctorPage from 'pages/dashboard/doctor/AddDoctorPage';
import AllPaymentPage from 'pages/dashboard/payment/AllPaymentPage';
import AddPaymentPage from 'pages/dashboard/payment/AddPaymentPage';
import PatientInvoicePage from 'pages/dashboard/payment/PatientInvoicePage';

// navigation pages
import ViewDoctors from 'pages/ViewDoctors';
import SearchDonorsPage from 'pages/SearchDonorsPage';
import RequestBloodPage from 'pages/RequestBloodPage';
import LoginSignup from 'components/loginSignup/LoginSignup';

const AppRouter = () => {
  return (
    <>
      {/* <Home /> */}
      {/* <DoctorDetailPage /> */}
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

        {/* Navigation routes */}
        <Route path="viewDoctors" element={<ViewDoctors />} />
        <Route path="search-donors" element={<SearchDonorsPage />} />
        <Route path="blood-request" element={<RequestBloodPage />} />
        <Route path="login-signup" element={<LoginSignup />} />

        {/* Dashboard routes */}
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
