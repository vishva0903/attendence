import React, { useState } from "react";
import '../../styles/dashboard/Dashboard.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import womenimg from '../../assets/3d.png'
function AddClass() {

    // Navigate
    const navigate = useNavigate()

    // form handler
    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form);
    }

    const onSubmitHandler = (event) => {
        console.log(form, "from data")

        axios.post("http://localhost:5000/user123", form)
            .then((response) => {
                console.log(response.data);
                navigate("/AddClass");
            })
            .catch((err) => console.log(err))
        event.preventDefault();

    }

    return (
        <>
            <div className='dashboard-div'>

                <div className="row-dashboard">

                    <div className="column-1">

                        <div id="heading"><a href="#"><h5 class="text-1">Attendance Management System</h5></a></div>

                        <div id="side-menu">

                            <ul className="side-menu-top">
                                <li className="li-space"><Link to="/dashboard/DAshboard"><span class="text">Dashboard</span></Link></li>
                                <li className="li-space"><Link to="/teacher/AddClass"><span className="text">Class</span></Link></li>
                                <li className="li-space"><Link to="/teacher/AddSubject"><span className="text">Subject</span></Link></li>
                                <li className="li-space"><Link to="/teacher/AddTeacher"><span className="text">Teacher</span></Link></li>
                                <li className="li-space"><Link to="/teacher/AddStudent"><span className="text">Student</span></Link></li>
                                <li className="li-space"><Link to="/teacher/AddAttendance"><span className="text">Attendance</span></Link></li>
                                <li className="li-space"><Link to="/teacher/Report"><span className="text">Report</span></Link></li>
                            </ul>

                        </div>

                        <div id="wimg">
                            <img id="womenimg" src={womenimg}></img>
                        </div>

                    </div>

                    <div className="column-2">

                        <div className="col-content">

                            <div className="content">

                                <div className="d-nav">
                                    <span className="nav-name">Welcome to your Teacher Dashboard!!</span>
                                </div>

                                <div className="main-row-div">

                                    <div className="row-div-1">

                                        <div className="row-1">

                                            <div className="card">

                                                <div className="card-row">

                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="ti-user"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p><b>Class</b></p>
                                                        </div>
                                                    </div>

                                                    <Link to="/teacher/AddClass">
                                                        <div className="footer">
                                                            <hr />
                                                            <div className="stats"><i class="ti-arrow-right"></i>View</div>
                                                        </div>
                                                    </Link>

                                                </div>

                                            </div>
                                        </div>


                                        <div className="row-1">

                                            <div className="card">

                                                <div className="card-row">

                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="ti-user"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p><b>Subject</b></p>
                                                        </div>
                                                    </div>

                                                    <a href="#">
                                                        <div className="footer">
                                                            <hr />
                                                            <div className="stats"><i class="ti-arrow-right"></i>View</div>
                                                        </div>
                                                    </a>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="row-1">

                                            <div className="card">

                                                <div className="card-row">

                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="ti-user"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p><b>Teacher</b></p>
                                                        </div>
                                                    </div>

                                                    <a href="#">
                                                        <div className="footer">
                                                            <hr />
                                                            <div className="stats"><i class="ti-arrow-right"></i>View</div>
                                                        </div>
                                                    </a>

                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="row-div-2">

                                        <div className="row-1">

                                            <div className="card">

                                                <div className="card-row">

                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="ti-user"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-7">
                                                        <div className="name-card">
                                                            <p><b>Students</b></p>
                                                        </div>
                                                    </div>

                                                    <a href="#">
                                                        <div className="footer">
                                                            <hr />
                                                            <div className="stats"><i class="ti-arrow-right"></i>View</div>
                                                        </div>
                                                    </a>

                                                </div>

                                            </div>

                                        </div>


                                        <div className="row-1">

                                            <div className="card">

                                                <div className="card-row">

                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="ti-user"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p><b>Attendance</b></p>
                                                        </div>
                                                    </div>


                                                    <a href="#">
                                                        <div className="footer">
                                                            <hr />
                                                            <div className="stats"><i class="ti-arrow-right"></i>View</div>
                                                        </div>
                                                    </a>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="row-1">

                                            <div className="card">

                                                <div className="card-row">

                                                    <div className="col-xs-5">
                                                        <div className="icon-big icon-warning text-center">
                                                            <i className="ti-user"></i>
                                                        </div>
                                                    </div>

                                                    <div className="col-xs-7">
                                                        <div className="numbers">
                                                            <p><b>Report</b></p>
                                                        </div>
                                                    </div>


                                                    <a href="#">
                                                        <div className="footer">
                                                            <hr />
                                                            <div className="stats"><i class="ti-arrow-right"></i>View</div>
                                                        </div>
                                                    </a>

                                                </div>

                                            </div>


                                        </div>

                                    </div>


                                </div>


                            </div>

                        </div>


                    </div>

                    <div className="column-3">

                        <div className="header">
                            <div className="header-c3">
                                <h5>Profile Name</h5>
                                <i>logout icon</i>
                            </div>
                        </div>

                        <div className="section">
                            <div className="section-c3">
                                <p>Calender</p>
                            </div>
                        </div>

                        <div className="footer-c">
                            <div className="footer-c3">
                                <p>Today's Task</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>























        </>
    );
}

export default AddClass;