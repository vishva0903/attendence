import React from 'react';
import './home.css';
import image from '../../assets/teacher.jpg'
import img from '../../assets/student.jpg'
import imag from '../../assets/admin.jpeg'

function Home(){

    return(
        <div class="body2"> 
            <div class="heading"><h1>ATTENDANCE  MANAGEMENT  SYSTEM</h1></div>
            <div class="hcontainer">
                <div class="hcontainer1">
                    <div class="aimage">
                        <img class="aimg" src={imag} alt="tr"></img>
                    </div>
                    <div class="aname"><a href="www.admin.com"><input class="ad" type="submit" value="ADMIN" /></a></div>
                </div>
                <div class="hcontainer2">
                    <div class="timage">
                        <img class="timg" src={image} alt="tr"></img>
                    </div>
                    <div class="tname"><a href="www.teacher.com"><input class="tr" type="submit" value="TEACHER" /></a> </div>
                </div>
                <div class="hcontainer3">
                    <div class="simage">
                        <img class="simg" src={img} alt="tr"></img>
                    </div>
                    <div class="sname"><a href="http://localhost:3000/Login"><input class="st" type="submit" value="STUDENT" /></a></div>
                </div>
            </div>
        </div>
             
    );
}
export default Home;