import { React, useState } from 'react';
import './AddAdminClass.css';
import axios from 'axios';
function AddAdminClass() {

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

        axios.post("http://localhost:5000/ClassRoute/Admin/addClass", form)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.log(err))
        event.preventDefault();

    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className='addclass'>
                    <h3>ADD CLASS</h3>
                    <div className="head">
                        <label>Class</label>
                        <input type="text" name="Class"  placeholder="Full name" required=""  onChange={onChangeHandler}></input>
                    </div>
                    <div className='head'>
                        <label>Division</label>
                        <input type="text" name="Division"  placeholder="Division" required=""  onChange={onChangeHandler}></input>
                    </div>
                    <div className='head'>
                        <label>Teacher Name</label>
                        <input type="text" name="TeacherName"  placeholder="Teacher Name" required=""  onChange={onChangeHandler}></input>
                    </div>
                    <div className='head'>
                        <label>Classroom Number</label>
                        <input type="text" name="ClassroomNumber"  placeholder="ClassroomNumber" required=""  onChange={onChangeHandler}></input>
                    </div>
                    <div className='head'>
                        <label>Schedule</label>
                        <input type="text" name="Schedule" placeholder="Schedule" required=""  onChange={onChangeHandler}></input>
                    </div>
                    <div className='head'>
                        <label>Class capacity</label>
                        <input type="text" name="Classcapacity" placeholder="Class capacity" required=""  onChange={onChangeHandler}></input>
                    </div>

                    <button allign="center" type="Submit">Submit</button>
                </div>
                
            </form>
        </>
    )
}
export default AddAdminClass;