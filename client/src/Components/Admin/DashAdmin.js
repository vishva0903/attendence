import { React, useState } from 'react';
import './DashAdmin.css';
import axios from 'axios'
function DashAdmin() {

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
                <div className='adm'>
                    <div className='dash'>
                        <h1>Admin</h1>
                        <div class="adicon">
                            <button type='submit' onChange={onSubmitHandler}>Logout</button>
                        </div>
                    </div>
                    <div className='sidebar'>
                        <div className='link'>
                            <a href='/Admin/StudentLogin'><h4>Student</h4></a>
                            <a href='/Admin/TeacherLogin'><h4>Teacher</h4></a>
                            <a href='/Admin/AddClass'><h4>Class</h4></a>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default DashAdmin;