import React, { useState } from "react";
import '../styles/HomePage.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import studentimg from '../assets/students.png';
import teacherimg from '../assets/teacher.png'
import adminimg from '../assets/admin.png'


function HomePage() {
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
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        await axios
            // .post("http://localhost:5000/SigninPage", form)
            .then((response) => {
                console.log(response.data);
                navigate("/SigninPage");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="div-body">

            <div className='div-box-1' onSubmit={onSubmitHandler}>

                <div className="heading-box"><h1>ATTENDANCE  MANAGEMENT  SYSTEM</h1></div>

                <div className="hcontainer">

                    <div className="hcontainer1">
                        <div className="aimage"><img className="aimg" src={adminimg} alt="tr"></img></div>
                        <div className="sname">
                            <Link to='/SigninPage'><button class="button-89" role="button" onChange={onChangeHandler}>ADMIN</button></Link>
                        </div>
                    </div>

                    <div className="hcontainer2">
                        <div className="timage"><img className="timg" src={teacherimg} alt="tr"></img></div>
                        <div className="sname">
                            <Link to='/SigninPage'><button class="button-89" role="button" onChange={onChangeHandler}>TEACHER</button></Link>
                        </div>
                    </div>

                    <div className="hcontainer3">
                        <div className="simage"><img className="simg" src={studentimg} alt="tr"></img></div>
                        <div className="sname">
                            <Link to='/SigninPage'><button class="button-89" role="button" onChange={onChangeHandler}>STUDENT</button></Link>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default HomePage
