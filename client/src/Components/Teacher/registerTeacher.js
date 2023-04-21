// import {React , useState} from 'react';
// import axios from 'axios';
// import { useDropzone } from 'react-dropzone'
// import './RegisterTeacher.css';
// function RegisterTeacher(){

//     const [form, setForm] = useState({})
//     const onChangeHandler = (event) => {
//         setForm({
//             ...form,
//             [event.target.name] : event.target.value
//         })
//         console.log(form);
//     }

//     const onSubmitHandler = (event) => {
//         console.log(form,"from data")
        
//         axios.post("http://localhost:5000/user123",form)
//         .then((response) => {
//             console.log(response.data);
//         })
//         .catch((err) => console.log(err))
//         event.preventDefault();
        
//     }

//     // controlls for customer image uplaod
//     const [files, setFiles] = useState([])
//     const { getRootProps, getInputProps } = useDropzone({
//         accept: "image/*",
//         onDrop: (acceptedFiles) => {
//             setFiles(
//                 acceptedFiles.map((file) =>
//                     Object.assign(file, {
//                         preview: URL.createObjectURL(file),
//                     })
//                 )
//             )
//         },
//     })

//     const images = files.map((file) => (
//         <div key={file.name}>
//             <img className='emp-selected-image' src={file.preview} style={{ width: "200px" }} alt={file.name} />
//         </div>
//     ))

//     return(
//         <>
//             <div class="main-div">
//                 <form onSubmit={onSubmitHandler}>
//                     <h3>TEACHER REGISTRATION FORM</h3>
//                     <div>
//                         <h4>Personal Details</h4>
//                         <div class="basic">
//                             <div className="emp-image-upload" {...getRootProps()}>
//                                 {files.length === 0 && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&usqp=CAU" style={{ height: '100%', widht: '100%'}} />}
//                                 {images}
//                             </div>
//                             <div>
//                                 <label>First Name</label>
//                                 <input type="text" name="firstname" onChange={onChangeHandler}></input>    
//                                 <label>Last Name</label>
//                                 <input type="text" name="lastname" onChange={onChangeHandler}></input>
//                                 <br />
//                             </div>
//                             <label>Gender</label>
//                             <input type="radio" name="Division" onChange={onChangeHandler}></input>
//                             <label>Female</label>
//                             <input type="radio" name="Division" onChange={onChangeHandler}></input>
//                             <label>Male</label>
//                             <input type="radio" name="Division" onChange={onChangeHandler}></input>
//                             <label>Other</label>
//                             <br/>
//                         </div>
//                     </div> <br/>
//                     <div>
//                         <label>DOB</label>
//                         <input type="date" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>Blood Group</label>
//                         <input type="text" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>Phone</label>
//                         <input type="number" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>Qualification</label>
//                         <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
//                     </div> <br />

//                     <div class="Address boxshadow">
//                         <h4>Address</h4> <br />

//                         <label>Street Address</label>
//                         <textarea name="" id="" cols="100" rows="1"></textarea> <br />

//                         <label>State</label>
//                         <input type="text" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>City</label>
//                         <input type="text" name="TeacherName" onChange={onChangeHandler}></input>
                        
//                         <label>Pin Code</label>
//                         <input type="number" name="TeacherName" onChange={onChangeHandler}></input>
//                     </div> <br />

//                     <div class="Account Information boxshadow">
//                         <h4>Account Information</h4> <br />

//                         <label>User Name</label>
//                         <input type="text" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>Email</label>
//                         <input type="email" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>Password</label>
//                         <input type="password" name="TeacherName" onChange={onChangeHandler}></input>
                        
//                         <label>Confirm Password</label>
//                         <input type="password" name="TeacherName" onChange={onChangeHandler}></input>
//                     </div> <br />

//                     <div class="School-details boxshadow">
//                         <h4>School Details</h4> <br />

//                         <label>Joining Date</label>
//                         <input type="date" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>Current Position</label>
//                         <input type="text" name="TeacherName" onChange={onChangeHandler}></input>

//                         <label>Employee Code</label>
//                         <input type="number" name="TeacherName" onChange={onChangeHandler}></input>
                        
//                         <label>Working Hours</label>
//                         <input type="number" name="TeacherName" onChange={onChangeHandler}></input>
//                     </div> <br />

//                     <div>
//                         <button type="Submit">Submit</button>
//                     </div>

//                     </form>  
//             </div>
  
//         </>
//     );
// }
// export default RegisterTeacher;