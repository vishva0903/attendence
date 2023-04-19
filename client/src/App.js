import React from 'react';
import Regform from './Components/Student/Regform/index';
import AddClass from './Components/Admin/AddClass';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>

        {/* <Link to="/Regform">Regform</Link>
        <Link to ="/Loginform">Login</Link> */}

        <Routes>
          <Route path="/Regform" element={<Regform />} />
          <Route path="/AddClass" element={<AddClass />} />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
