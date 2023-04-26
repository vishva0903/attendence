import { React, useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone'
import './stdregform.css';
function Regform() {

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

                <div class='body'>

                    <div class='heading1'>
                        <h1>STUDENT REGISTRATION FORM</h1>
                    </div>

                    <div>

                        <div class='heading2' >
                            <h3>PERSONAL DETAILS</h3>
                        </div>

                        <div class="stdpic" {...getRootProps()}>
                            {files.length === 0 && <img class='stdpic1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" style={{ height: '100%', widht: '100%' }} />}
                            {images}
                        </div>

                        <div class='stdname'>
                            <div class="stdfname">
                                <label class="stdfname1">First Name</label>
                                <input class='stdfname-inp' type="text" name="firstname" onChange={onChangeHandler}></input>
                            </div>
                            <div class="stdlname">
                                <label class="stdlname1">Last Name</label>
                                <input class='stdlname-inp' type="text" name="lastname" onChange={onChangeHandler}></input>
                            </div>
                        </div>

                        <div class="gender">

                            <div class="gender-name">
                                <label>Gender</label><br />
                            </div>

                            <div class="male">
                                <input type="radio"  onChange={onChangeHandler}></input>
                                <label class="gname-male">Male</label>
                            </div>

                            <div class="female">
                                <input type="radio"  onChange={onChangeHandler}></input>
                                <label class="gname-female">Female</label>
                            </div>

                            <div class="other">
                            <input type="radio" onChange={onChangeHandler}></input>
                                <label class="gname-other">Other</label>
                            </div>

                        </div>

                        <div class="dob">
                            <label class="dob-name">DOB</label>
                            <input type="date"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="age">
                            <label class="age-name">Age</label>
                            <input type="number" onChange={onChangeHandler}></input>
                        </div>

                        <div class="bloodgroup">
                            <label class="bloodgroup-name">Blood Group</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="phoneno">
                            <label class="phoneno-name">Phone Number</label>
                            <input type="number"  onChange={onChangeHandler}></input>
                        </div>

                    </div>

                    <div>
                        <div class="heading3">
                            <h3>ADDRESS</h3>
                        </div>

                        <div class="heading4">
                            <h4>Current Address</h4>
                        </div>
                                
                        <div class="caddress-housename">
                            <label class="chouse-name">House Name / No</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="caddress-streetname">
                            <label class="cstreet-name">Street Name</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="caddress-village">
                            <label class="cvillage-name">Village</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="caddress-city">
                            <label class="ccity-name">City</label>
                            <input type="text" onChange={onChangeHandler}></input>
                        </div>

                        <div class="caddress-state">
                            <label class="cstate-name">State</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="caddress-pincode">
                            <label class="cpincode-name">Pin Code</label>
                            <input type="number"  onChange={onChangeHandler}></input> <br />
                        </div>

                        <div class="heading5">
                            <h4>Permanent Address</h4>
                        </div>

                        <div class="paddress-housename">
                            <label class="phouse-name">House Name / No</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="paddress-streetname">
                            <label class="pstreet-name">Street Name</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="paddress-village">
                            <label class="pvillage-name">Village</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="paddress-city">
                            <label class="pcity-name">City</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="paddress-state">
                            <label class="pstate-name">State</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div class="paddress-pincode">
                            <label class="ppincode-name">Pin Code</label>
                            <input type="number"  onChange={onChangeHandler}></input>
                        </div>

                    </div>

                    <div>
                        <div class="heading6">
                            <h3>PARENT DETAILS</h3>
                        </div>

                        <div class="parent-details">
                            <div>
                                <div class="heading6">
                                    <h4>Father's Details</h4>
                                </div>

                                <div class="">
                                    <label class="">Name</label>
                                    <input type="text" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Phone Number</label>
                                    <input type="text"  onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Email</label>
                                    <input type="email" onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Occupation</label>
                                    <input type="email"  onChange={onChangeHandler}></input>
                                </div>
                            </div>

                            <div>
                                <div class="heading6">
                                    <h4>Mother's Details</h4>
                                </div>
                                <div className='student-section'>
                                    <label>Name</label>
                                    <input type="text"  onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Phone Number</label>
                                    <input type="text"  onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Email</label>
                                    <input type="email"  onChange={onChangeHandler}></input>
                                </div>

                                <div className='student-section'>
                                    <label>Occupation</label>
                                    <input type="email"  onChange={onChangeHandler}></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="school-details ">
                        <div>
                            <h4>School Details</h4>
                        </div>

                        <div className='student-section'>
                            <label>Joining Date</label>
                            <input type="date"  onChange={onChangeHandler}></input>
                        </div>

                        <div className='student-section'>
                            <label>Select Class</label>
                            <input type="text"  onChange={onChangeHandler}></input>
                        </div>

                        <div className='student-section'>
                            <label>Roll No</label>
                            <input type="number"  onChange={onChangeHandler}></input>
                        </div>
    
                    </div>

                    <div className='student-button'>
                        <button type="Submit">Submit</button>
                    </div>

                </div>

            </form >
        </>
    );
}
export default Regform;