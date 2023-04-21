import { React, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import './AddStudent.css';
function AddStudent() {

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

    // controlls for customer image uplaod
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    })

    const images = files.map((file) => (
        <div key={file.name}>
            <img className='emp-selected-image' src={file.preview} alt={file.name} />
        </div>
    ))

    return (
        <>
            <form onSubmit={onSubmitHandler}>

                <div className='main-div'>

                    <div className='student-div'>

                        <h1>STUDENT REGISTRATION FORM</h1>

                        <div >

                            <h4>Personal Details</h4>
                            <div class="as">
                            <div className="emp-image-upload" {...getRootProps()}>
                                {files.length === 0 && <img className='dispaly-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" style={{ height: '100%', widht: '100%' }} />}
                                {images}
                            </div>

                            <div className='name-section'>
                                <div class="first-name">
                                <label>First Name</label>
                                <input className='firstname-inp-section' type="text" name="firstname" onChange={onChangeHandler}></input>
                                </div>
                                <div class="second-name">
                                <label>Last Name</label>
                                <input className='lastname-inp-section' type="text" name="lastname" onChange={onChangeHandler}></input>
                                </div>
                            </div>
                            </div>

                            <div>

                                <div className='student-section'>
                                    <label>Gender</label><br />
                                    <input type="radio" name="Division" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Female</label>
                                    <input type="radio" name="Division" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Male</label>
                                    <input type="radio" name="Division" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Other</label>
                                </div>

                            </div>

                            <div>

                                <div className='student-section'>
                                    <label className='studlabel'>DOB</label>
                                    <input type="date" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Blood Group</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Phone</label>
                                    <input type="number" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                            </div>

                            <div className="Address">
                                <h4>Address</h4>

                                <div className='student-section'>
                                    <label>Current Address</label>
                                    <textarea name="" id="" cols="100" rows="1"></textarea> <br />
                                </div>

                                <div className='student-section'>
                                    <label>State</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>City</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Pin Code</label>
                                    <input type="number" name="TeacherName" onChange={onChangeHandler}></input> <br />
                                </div>

                                <div className='student-section'>
                                    <input type="checkbox" name="TeacherName" onChange={onChangeHandler}></input>
                                    <label>Same as above</label>
                                </div>

                                <div className='student-section'>
                                    <label>Permanent Address</label>
                                    <textarea name="" id="" cols="100" rows="1"></textarea> <br />
                                </div>

                                <div className='student-section'>
                                    <label>State</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>City</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Pin Code</label>
                                    <input type="number" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                            </div>

                            <div className="Parent">

                                <h4>Parent Details</h4>

                                <div className='student-section'>
                                    <label>Father Name</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Father Phone</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Father's Email</label>
                                    <input type="email" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Father's Occupation</label>
                                    <input type="email" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Mother Name</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Mother Phone</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Mother's Email</label>
                                    <input type="email" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Mother's Occupation</label>
                                    <input type="email" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                            </div>

                            <div className="school-details ">

                                <h4>School Details</h4>

                                <div className='student-section'>
                                    <label>Joining Date</label>
                                    <input type="date" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Select Class</label>
                                    <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Roll No</label>
                                    <input type="number" name="TeacherName" onChange={onChangeHandler}></input>
                                </div>

                            </div>

                            <div className='student-button'>
                                <button type="Submit">Submit</button>
                            </div>

                        </div>

                    </div>

                </div>

            </form >


        </>
    );
}
export default AddStudent;