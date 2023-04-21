import React from 'react';
import Regform from './Components/Student/Regform/index';
import AddClass from './Components/Admin/AddClass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewStudent from './Components/Admin/ViewStudent';
import ViewClass from './Components/Admin/ViewClass';
import ViewAttendence from './Components/Admin/ViewAttendence';
import DashAdmin from './Components/Admin/DashAdmin';

function App() {
  return (
    <>
      <BrowserRouter>

        {/* <Link to="/Regform">Regform</Link>
        <Link to ="/Loginform">Login</Link> */}

        <Routes>
          <Route path="/Regform" element={<Regform />} />
          <Route path="/Admin/AddClass" element={<AddClass />} />
          <Route path="/Admin/ViewStudent" element={<ViewStudent />} />
          <Route path="/Admin/ViewClass" element={<ViewClass />} />
          <Route path="/Admin/ViewAttendence" element={<ViewAttendence />} />
          <Route path="/Admin/DashAdmin" element={<DashAdmin />} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
