import { React, useState } from 'react';
import './DashAdmin.css';
import axios from 'axios';
import image from '../../assets/logouticon.png'
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
                            <img class="adicon1" src={image} alt="adicon"></img>
                        </div>
                    </div>
                    <div className='sidebar'>
                        <div className='link'>
                            <a href='/ViewStudent'><h5>Student</h5></a>
                            <a href='/ViewTteacher'><h5>Teacher</h5></a>
                        </div>
                    </div>
                    <div className='but'>
                        <button type='submit' onChange={onSubmitHandler}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default DashAdmin;