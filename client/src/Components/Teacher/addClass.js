import React, { useState } from "react";
import '../../styles/teacher/AddClass.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
                navigate("/");
            })
            .catch((err) => console.log(err))
        event.preventDefault();

    }

    return (
        <>
            <div className='main-div'>

                <form className='addclass-form' onSubmit={onSubmitHandler}>

                    <div className='heading-div'><h1>ADD CLASS</h1></div>

                    <div className='input-div'>
                        <div className='class-section'>
                            <label className="addclass-label">Class Name</label>
                            <input className="addclass-input" type="text" name="Class" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className="addclass-label">Division</label>
                            <input className="addclass-input" type="text" name="Division" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className="addclass-label">Class Teacher</label>
                            <input className="addclass-input" type="text" name="Teacher Name" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className="addclass-label">Classroom Number</label>
                            <input className="addclass-input" type="text" name="ClassroomNumber" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className="addclass-label">Class capacity</label>
                            <input className="addclass-input" type="text" name="Class capacity" onChange={onChangeHandler}></input>
                        </div>
                    </div>
                    <button className='btn-addclass' align="center" type="Submit">Submit</button>

                </form >

            </div>

        </>
    )
}
export default AddClass;