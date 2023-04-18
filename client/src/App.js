// import logo from './logo.svg';
import './App.css';
import Regform from './Components/Student/Regform/index';
import Loginform from './Components/Student/Loginform/index';
import{Link, BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <><BrowserRouter>

      {/* <Link to="/Regform">Regform</Link>
      <Link to ="/Loginform">Login</Link> */}

      <Routes>
        <Route path="/Regform" element={<Regform />} />
        <Route path ="/Loginform" element = {<Loginform/>} />

      </Routes>


    </BrowserRouter>

    </>
  );
}

export default App;
