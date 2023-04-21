import React from 'react';
import './dashboard.css';
import image from '../../../assets/logouticon.png'
function Dashboard(){
    return(
        <div class="scontainer">
            <div class="nav">
                <div class="sheading">Welcome Name</div>
                <div class="sicon">
                    <img class="sicon1" src={image} alt="sicon"></img>
                </div>
            </div>
           
            <div class="sidenav">
                <div class="sidenav1"></div>
                <div class="sidenav2"><a href="http://localhost:3000/Regform"><input class="snreg" type="submit" value="Register" /></a></div>
                <div class="sidenav3"><a href="http://localhost:3000/Regform"><input class="snatt" type="submit" value="View Attendance" /></a></div>
                <div class="sidenav4"><a href="http://localhost:3000/Regform"><input class="sntt" type="submit" value="Timetable" /></a></div>
                <div class="sidenav5"><a href="http://localhost:3000/Regform"><input class="snrpt" type="submit" value="Report" /></a></div>
            </div>
        </div>
    );
}
export default Dashboard;