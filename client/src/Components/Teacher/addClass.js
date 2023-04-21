import { React, useState } from 'react';
import './AddClass.css';
import axios from 'axios';
function AddClass() {

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

                    <div className='class-div'>

                        <h1>ADD CLASS</h1>

                        <div className='class-section'>
                            <label className='class-label'>Class Name</label>
                            <input className='class-input' type="text" name="Class" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className='class-label'>Division</label>
                            <input className='class-input' type="text" name="Division" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className='class-label'>Class Teacher</label>
                            <input className='class-input' type="text" name="Teacher Name" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className='class-label'>Classroom Number</label>
                            <input className='class-input' type="text" name="ClassroomNumber" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-section'>
                            <label className='class-label'>Class capacity</label>
                            <input className='class-input' type="text" name="Class capacity" onChange={onChangeHandler}></input>
                        </div>
                        <div className='class-button'>
                            <button allign="center" type="Submit">Submit</button>
                        </div>

                    </div>

                </div>


            </form >
        </>
    )
}
export default AddClass;