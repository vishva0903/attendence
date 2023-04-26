import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


import Home from './Components/Home/home';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Password from './Components/Password/password';
import SDashboard from './Components/Student/SDashboard/dashboard';
import Regform from './Components/Student/Regform/stdregform';
import Sviewattendance from './Components/Student/Sviewattendance/Sviewattendance';
import Studenttimetable from './Components/Student/Studenttimetable/Studenttimetable';


// Monisha ////////////////////////////////////////////////////////////////////

import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';

// Teacher

import AddClass from './Components/teacher/AddClass';
import AddSubject from './Components/teacher/AddSubject';
import AddAttendance from './Components/teacher/AddAttendance';
import AddStudent from './Components/teacher/AddStudent';
import AddTeacher from './Components/teacher/AddTeacher';

// Dashboard

import Dashboard from './Components/dashboard/Dashboard';

//vishva//////////////////////////

import AddAdminClass from './Components/Admin/AddAdminClass';
import DashAdmin from './Components/Admin/DashAdmin';
import ViewAttendence from './Components/Admin/ViewAttendence';
import ViewClass from './Components/Admin/ViewClass';
import ViewReport from './Components/Admin/ViewReport';
import ViewStudent from './Components/Admin/ViewStudent';
import ViewSubject from './Components/Admin/ViewSubject';
import ViewTeacher from './Components/Admin/ViewTeacher';
/////////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/SDashboard" element={<SDashboard />} />
          <Route path="/Regform" element={<Regform />} />
          <Route path="/Sviewattendance" element={<Sviewattendance />} />
          <Route path="/Studenttimetable" element={<Studenttimetable />} />


          {/* Monisha//////////////////////////////////////////////////////////////////////////////////// */}

          <Route path='/SigninPage' element={<SigninPage />} ></Route>
          <Route path='/SignupPage' element={<SignupPage />} ></Route>
          <Route path='/HomePage' element={<HomePage />}></Route>

          {/* Teacher */}

          <Route path="/Teacher/AddClass" element={<AddClass />} />
          <Route path="/Teacher/AddSubject" element={<AddSubject />} />
          <Route path="/Teacher/AddAttendance" element={<AddAttendance />} />
          <Route path="/Teacher/AddStudent" element={<AddStudent />} />
          <Route path="/Teacher/AddTeacher" element={<AddTeacher />} />

          {/* Dashboard */}

          <Route path='/dashboard/Dashboard' element={<Dashboard />}></Route>

          {/* /////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* Admin */}

          <Route path="/AddAdminClass" element={<AddAdminClass/>} />
          <Route path="/DashAdmin" element={<DashAdmin/>} />
          <Route path="/ViewAttendence" element={<ViewAttendence/>} />
          <Route path="/ViewClass" element={<ViewClass/>} />
          <Route path="/ViewReport" element={<ViewReport/>} />
          <Route path="/ViewStudent" element={<ViewStudent/>} />
          <Route path="/ViewSubject" element={<ViewSubject/>} />
          <Route path="/ViewTeacher" element={<ViewTeacher/>} />




        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
