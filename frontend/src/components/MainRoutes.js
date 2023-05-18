import React from 'react';
import LandingPage from '../screens/LandingPage.jsx';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../screens/LoginPage.jsx';
import SignupPage from '../screens/SignupPage.jsx';
import HomePage from '../screens/HomePage.jsx';
import AppointmentsPage from '../screens/AppointmentsPage.jsx';
/* import ReviewPage from '../screens/ReviewPage.jsx'; */
import TimeSlotPage from '../screens/TimeSlotPage.jsx';

const MainRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/loginpage' element={<LoginPage />} /> 
      <Route path='/signuppage' element={<SignupPage />}  />
      <Route path='/homepage' element={<HomePage />}  />
      <Route path='/appointmentspage' element={<AppointmentsPage />}  />
      {/* <Route path='/reviewpage' element={<ReviewPage />}  /> */}
      <Route path='/timeslotpage' element={<TimeSlotPage />}  />
     </Routes>
    </div>
  );
}; 

export default MainRoutes; 