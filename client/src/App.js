// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import Signup from './Components/Signup/signup';
import Password from './Components/Password/password';
import SDashboard from './Components/Student/SDashboard/dashboard';
import Regform from './Components/Student/Regform/index';
import Sviewattendance from './Components/Student/Sviewattendance/Sviewattendance';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
      </Routes>

    
       


      </BrowserRouter>

    </>
  );
}

export default App;
