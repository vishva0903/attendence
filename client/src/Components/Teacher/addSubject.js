import React, { useState } from "react";
import '../../styles/teacher/AddSubject.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function AddSubject() {

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

                    <div className='heading-div'><h1>ADD SUBJECT</h1></div>

                    <div className='input-div'>
                        <div className='class-section'>
                            <label className="addclass-label">Subject Name</label>
                            <input className="addclass-input" type="text" name="Subject Name" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className="addclass-label">Subject Code</label>
                            <input className="addclass-input" type="text" name="Subject Code" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className="addclass-label">Subject Teacher</label>
                            <input className="addclass-input" type="text" name="Subject Teacher" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className="addclass-label">Book Name</label>
                            <input className="addclass-input" type="text" name="Book Name" onChange={onChangeHandler}></input>
                        </div>
                    </div>
                    <button className='btn-addclass' align="center" type="Submit">Submit</button>

                </form >

            </div>

        </>
    )
}
export default AddSubject;