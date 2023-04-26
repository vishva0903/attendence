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

import AddClass from './components/teacher/AddClass';
import AddSubject from './components/teacher/AddSubject';
import AddAttendance from './components/teacher/AddAttendance';
import AddStudent from './components/teacher/AddStudent';
import AddTeacher from './components/teacher/AddTeacher';

// Dashboard

import Dashboard from './components/dashboard/Dashboard';

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
      </Routes>
        <Routes>
          <Route path="/Regform" element={<Regform />} />
          <Route path="/AddClass" element={<AddClass />} />
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

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
