import React from 'react';
import './home.css';
import { useNavigate } from "react-router-dom";
import image from '../../assets/teacher.jpg'
import img from '../../assets/student.jpg'
import imag from '../../assets/admin.jpeg'

function Home(){
    const navigate = useNavigate();

    function handleSubmit() {
        
        navigate("/Login");

    }

    return(
        <div class="body2"> 
            <div class="heading"><h1>ATTENDANCE  MANAGEMENT  SYSTEM</h1></div>
            <div class="hcontainer">
                <div class="hcontainer1">
                    <div class="aimage">
                        <img class="aimg" src={imag} alt="tr"></img>
                    </div>
                    <div class="aname"><input class="ad" type="submit" value="ADMIN" onClick={handleSubmit} /></div>
                </div>
                <div class="hcontainer2">
                    <div class="timage">
                        <img class="timg" src={image} alt="tr"></img>
                    </div>
                    <div class="tname"><input class="tr" type="submit" value="TEACHER" onClick={handleSubmit} /></div>
                </div>
                <div class="hcontainer3">
                    <div class="simage">
                        <img class="simg" src={img} alt="tr"></img>
                    </div>
                    <div class="sname"><input class="st" type="submit" value="STUDENT" onClick={handleSubmit}  /></div>
                </div>
            </div>
        </div>
             
    );
}
export default Home;