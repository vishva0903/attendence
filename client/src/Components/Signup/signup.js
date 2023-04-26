import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './signup.css';

function Signup() {

    // form handler
	const [form, setForm] = useState({})
	const onChangeHandler = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
		console.log(form);
    }

    // const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
            await axios
                .post("http://localhost:5000/StudentRoutes/Login", form)
                .then((response) => {
                    console.log(response.data);
                    // navigate("/Login");
                })
                .catch((err) => console.log(err));
        };
    
    return (<><div class="signupbody">
        <form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

        <h1>Create Account</h1>
        <label>
            <div class="shead">Dont't have an account ?</div>
            <div class="signlnk"><a href="http://localhost:3000/Login">Sign in </a></div>
          
            <div class="fname">
                <div class="fnames1">First Name </div>
                <div class="fnames2"><input type="text" name="firstName" onChange={onChangeHandler} /><br></br></div>
            </div>
            <div class="lname">
                <div class="lname1">Last Name </div>
                <div class="lname2"><input type="text" name="lastName" onChange={onChangeHandler} /><br></br></div>
            </div>
            <div class="signname">
                <div class="id1">User Id </div>
                <div class="id2"><input type="text" name="userId" onChange={onChangeHandler} /><br></br></div>
            </div>
            <div class="signpswd">
                <div class="pswd1">Password </div>
                <div class="pswd2"><input type="password" name="password" onChange={onChangeHandler} /><br></br></div>
            </div>
           
        </label>
        <input class="signup" type="submit" value="SIGN UP"  onChange={onChangeHandler} />
      
      </form>
    </div>
    </>
    );
}
export default Signup;