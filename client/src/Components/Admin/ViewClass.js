import axios from "axios";
import './ViewClass.css';
import { React, useEffect, useState } from 'react';

function ViewClass() {
    const [user, setUser] = useState("")

    function info(id) {
        console.log(id)
        axios.get(`http://localhost:5000/${id}`)
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch((err) => console.log(console.err))
    }

    const token = JSON.parse(localStorage.getItem("user-token"));
    console.log(token);
    function verify() {
        axios.post("http://localhost:5000/Verifytoken", { token: token })
            .then((response) => {
                console.log(response.data);
                info(response.data._id);
            })
    }
    useEffect(() => { verify() }, [])

    return (
        <>
            <div className="ViewClass">
                <h2>Class</h2>
                <div className="viewclass-head">
                    <h5>Class:{user.Class}</h5>
                </div>
                <div className="viewclass-head">
                    <h5>Division:{user.Division}</h5>
                </div>
                <div className="viewclass-head">
                    <h5>Teacher Name:{user.TeacherName}</h5>
                </div>
                <div className="viewclass-head">
                    <h5>Classroom Number:{user.ClassroomNumber}</h5>
                </div>
                <div className="viewclass-head">
                    <h5>Schedule:{user.Schedule}</h5>
                </div>
                <div className="viewclass-head">
                    <h5>Class capacity:{user.Classcapacity}</h5>
                </div>
            </div>
        </>
    )
}
export default ViewClass;