import { React, useState } from 'react';
import axios from 'axios';
import './AddSubject.css';
function AddSubject() {

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

                <div className='main-div'>

                    <div className='subject-div'>

                        <h1>ADD SUBJECT</h1>

                        <div className='subject-section'>
                            <label>Subject Name</label>
                            <input type="text" name="firstname" onChange={onChangeHandler}></input>
                        </div>
                        <div className='subject-section'>
                            <label>Subject Code</label>
                            <input type="text" name="lastname" onChange={onChangeHandler}></input>
                        </div>
                        <div className='subject-section'>
                            <label>Subject Teacher</label>
                            <input type="text" name="lastname" onChange={onChangeHandler}></input>
                        </div>
                        <div className='subject-section'>
                            <label>Book Name</label>
                            <input type="text" name="lastname" onChange={onChangeHandler}></input>
                        </div>
                        <div className='subject-button'>
                            <button type="Submit">Submit</button>
                        </div>

                    </div>


                </div>

            </form >  
  
        </>
    );
}
export default AddSubject;