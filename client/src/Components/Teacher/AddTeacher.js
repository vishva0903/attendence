import { React, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import '../../styles/teacher/AddStudent.css';
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

        axios.post("http://localhost:5000/addTeacherRoute/addTeacherDetails", form)
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
            <div className='student-main-box'>

                <form className='student-form-box' onSubmit={onSubmitHandler}>

                    <div className='student-heading-div'><h1>TEACHER REGISTERATION FORM</h1></div>

                    <div className='student-div'>

                        <div className="personal-details">

                            <div className="emp-image-upload" {...getRootProps()}>
                                {files.length === 0 && <img className='dispaly-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" style={{ height: '100%', widht: '100%' }} />}
                                {images}
                            </div>

                            <div className='student-h6-div'><h6 className='h6-div'>Personal Details</h6></div>

                            <div className='student-section-p'>
                                <label className='p-label'>First Name</label>
                                <input className='p-input' type="text" name="FirstName" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Last Name</label>
                                <input className='p-input' type="text" name="LastName" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Email</label>
                                <input className='p-input' type="email" name="Email" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Phone Number</label>
                                <input className='p-input' type="number" name="PhoneNo" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>DOB</label>
                                <input className='p-input' type="date" name="DOB" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Blood Group</label>
                                <input className='p-input' type="text" name="BloodGroup" onChange={onChangeHandler}></input>
                            </div>

                            <div className='gender'>
                                <label className='gender-h'>Gender </label><br />
                                <div className='gender-box'>
                                    <div className='gender-box1'>
                                        <input className='gender-input' type="radio" name="Gender" onChange={onChangeHandler}></input>
                                        <label className='gender-label'>Female</label>
                                    </div>
                                    <div className='gender-box2'>
                                        <input className='gender-input' type="radio" name="Gender" onChange={onChangeHandler}></input>
                                        <label className='gender-label'>Male</label>
                                    </div>
                                    <div className='gender-box3'>
                                        <input className='gender-input' type="radio" name="Gender" onChange={onChangeHandler}></input>
                                        <label className='gender-label'>Other</label>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="Address">

                            <div className='student-h6-div'><h6 className='h6-div'>Address</h6></div>

                            <div className='student-section-pa'>
                                <label className='pa'>Communication Address</label>
                                <textarea className='pa-textarea' name="CommAddress" id="" cols="60" rows="3"></textarea> <br />
                            </div>

                            <div className='student-section-s'>
                                <div className='student-section-s'>
                                    <input id='state' className='s-input' placeholder='state' type="text" name="State" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section-s'>
                                    <input id='city' className='s-input' placeholder='City' type="text" name="CityORTown" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section-s'>
                                    <input id='pincode' className='s-input' placeholder='PIN Code' type="number" name="PINCode" onChange={onChangeHandler}></input>
                                </div>
                            </div>

                            <div className='student-section-check'>
                                <input id='checkbox' type="checkbox" name="checkbox" onChange={onChangeHandler}></input>
                                <label>Same as above</label> <hr id='hr'/>
                            </div>

                            <div className='student-section-pa'>
                                <label className='pa'>Permanent Address</label>
                                <textarea className='pa-textarea' name="PermAddress" id="" cols="60" rows="3"></textarea> <br />
                            </div>

                            <div className='student-section-s'>
                                <div className='student-section-s'>
                                    <input id='state' className='s-input' placeholder='state' type="text" name="PState" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section-s'>
                                    <input id='city' className='s-input' placeholder='City' type="text" name="PCityORTown" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section-s'>
                                    <input id='pincode' className='s-input' placeholder='PIN Code' type="number" name="PPINCode" onChange={onChangeHandler}></input>
                                </div>
                            </div>

                        </div>

                        <div className="parent">

                            <div className='student-h6-div'><h6 className='h6-div'>Parent Details</h6></div>

                            <div className='student-section-p'>
                                <label className='p-label'>Father Name</label>
                                <input className='p-input' type="text" name="FatherName" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Father Phone</label>
                                <input className='p-input' type="number" name="FatherPhone" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Father's Email</label>
                                <input className='p-input' type="email" name="FatherEmail" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Father's Occupation</label>
                                <input className='p-input' type="text" name="FatherOccupation" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Mother Name</label>
                                <input className='p-input' type="text" name="MotherName" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Mother Phone</label>
                                <input className='p-input' type="number" name="MotherPhone" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Mother's Email</label>
                                <input className='p-input' type="email" name="MotherEmail" onChange={onChangeHandler}></input>
                            </div>

                            <div className='student-section-p'>
                                <label className='p-label'>Mother's Occupation</label>
                                <input className='p-input' type="text" name="MotherOccupation" onChange={onChangeHandler}></input>
                            </div>

                        </div>

                        <div className='student-h6-div'><h6 className='h6-div'>School Details</h6></div>

                        <div className="school-details ">

                            <div className="Date">
                                <input placeholder='Joining Date' className='design' type="text" name="JoiningDate" onChange={onChangeHandler}></input>
                            </div>
                            <div className='Select-Class'>
                                <select className='design' name='SelectClass'>
                                    <option>Select Class</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                            </div>
                            <div className='Division'>
                                <select className='design' name='Division'>
                                    <option>Division</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <option>E</option>
                                </select>
                            </div>

                            <div className='student-section-3'>
                                <input className='design-roll' id='rno' type="number" name="RollNo" placeholder='Roll No' onChange={onChangeHandler}></input>
                            </div>

                        </div>

                        <button className='btn-student' type="Submit" OnChange={onChangeHandler}>Submit</button>

                    </div>


                </form >

            </div>

        </>
    );
}
export default AddStudent;