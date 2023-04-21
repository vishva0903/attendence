import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './signup.css';
function Signup() {
    const [fname, setFname] = useState(" ");
    const [lname, setLname] = useState(" ");
    const [id, setId] = useState(" ");
    const [password, setPassword] = useState(" ");
    // const[drop, setDrop] = useState(" ");

    const navigate = useNavigate();

    function handleSubmit() {
        console.log(fname, lname, id, password)
        navigate("/Login");

    }
    return (<><div class="signupbody"><h1>Create Account</h1>
        <label>
            <div class="shead">Dont't have an account ?</div>
            <div class="signlnk"><a href="http://localhost:3000/Login">Sign in </a></div>
            <div class="fname">
                <div class="fnames1">First Name </div>
                <div class="fnames2"><input type="text" value={fname} onChange={(e) => setFname(e.target.value)} /><br></br></div>
            </div>
            <div class="lname">
                <div class="lname1">Last Name </div>
                <div class="lname2"><input type="text" value={lname} onChange={(e) => setLname(e.target.value)} /><br></br></div>
            </div>
            <div class="signname">
                <div class="id1">User Id </div>
                <div class="id2"><input type="text" value={id} onChange={(e) => setId(e.target.value)} /><br></br></div>
            </div>
            <div class="signpswd">
                <div class="pswd1">Password </div>
                <div class="pswd2"><input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br></div>
            </div>
            {/* <div class="drop">
                <div class="drop1">Choose </div>
                <div class="drop2">
                    <select value = {drop} onChange = {(e) => setDrop(e.target.value)}>  
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                    </select><br></br>
                </div>
            </div> */}
        </label>
        <input class="signup" type="submit" value="SIGN UP" onClick={handleSubmit} />
      
    </div>
    </>
    );
}
export default Signup;