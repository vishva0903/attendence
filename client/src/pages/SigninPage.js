import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/SigninPage.css';

function SigninPage() {

	// Navigate
	const navigate = useNavigate()

	// form handler
	const [form, setForm] = useState({})
	const onChangeHandler = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
		console.log(form);
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		axios
			// .post("http://localhost:5000/userRoute/Signin", form)
			.then((response) => {
				console.log(response.data);
				localStorage.setItem("user-token", JSON.stringify(response.data.token));//token generated from signin api 
				navigate("/dashboard/Dashboard");
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className='main-div'>

				<form className='signin-form' layout="vertical" onSubmit={onSubmitHandler}>

					<div className='login-heading-div'><h1>Login Here</h1></div>

					<div className='login-input-div'>
						<input type="email" required placeholder='Email' name="email" onChange={onChangeHandler}></input>
						<input type="password" required placeholder='Password' name="password" onChange={onChangeHandler}></input>
						<Link to='/dashboard/Dashboard'><button className='btn-signin' align="center" type="Submit" onChange={onChangeHandler}>SIGN IN</button></Link>
					</div>

					<div className='signin-nav'>
						<span><Link to='/ForgottenPassword'><b>Forgot Password ?</b></Link></span>
					</div>

					<div className='signin-nav'>
						<span>Don't have an account?<Link to='/SignupPage'><b> Signup</b></Link></span>
					</div>

				</form >

			</div>

		</>
	)
}
export default SigninPage;