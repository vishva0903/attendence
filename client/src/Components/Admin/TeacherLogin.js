import { React, useState } from 'react';
import './TeacherLogin.css';
import axios from 'axios';
function TeacherLogin() {

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
            })
            .catch((err) => console.log(err))
        event.preventDefault();

    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className='teacherlogin'>
                    <h3>TEACHER LOGIN</h3>
                    <div className="head">
                        <label>Email</label>
                        <input type="text" name="Email"  placeholder="Email" required=""  onChange={onChangeHandler}></input>
                    </div>
                    <div className='head'>
                        <label>Password</label>
                        <input type="password" name="Password" id='password' placeholder="Password" required=""  onChange={onChangeHandler}></input>
                    </div>
                    <button allign="center" type="Submit">Submit</button>
                </div>
                
            </form>
        </>
    )
}
export default TeacherLogin;