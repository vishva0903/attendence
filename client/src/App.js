import React from 'react';

import Regform from './Components/Student/Regform/index';

// Teacher

import AddClass from './Components/Teacher/AddClass';
import AddSubject from './Components/Teacher/AddSubject';
import AddStudent from './Components/Teacher/AddStudent';
import Attendance from './Components/Teacher/Attendance';
import RegisterTeacher from './Components/Teacher/RegisterTeacher';
import Report from './Components/Teacher/Report';
import dashboard from './Components/Teacher/dashboard';



import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/Regform" element={<Regform />} />
          <Route path="/AddClass" element={<AddClass />} />

          {/* Teacher */}

          <Route path="/Teacher/AddClass" element={<AddClass />} />
          <Route path="/Teacher/AddSubject" element={<AddSubject />} />
          <Route path="/Teacher/AddStudent" element={<AddStudent />} />
          <Route path="/Teacher/Attendance" element={<Attendance />} />
          <Route path="/Teacher/RegisterTeacher" element={<RegisterTeacher />} />
          <Route path="/Teacher/Report" element={<Report />} />
          <Route path="/Teacher/dashboard" element={<dashboard />} />


        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
