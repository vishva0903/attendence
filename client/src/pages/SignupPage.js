import React, { useState } from "react";
import '../styles/SignupPage.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function SignupPage() {

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

	const onSubmitHandler = async (event) => {
		event.preventDefault();
		await axios
			.post("http://localhost:5000/userRoute/Signup", form)
			.then((response) => {
				console.log(response.data);
				navigate("/LoginPage");
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className='main-div'>

				<form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

					<div className='signup-heading-div'><h1>Create an Account</h1></div>

					<div className='input-div'>
						<input type="text" required placeholder='First Name' name="firstName" onChange={onChangeHandler}></input>
						<input type="text" required placeholder='Last Name' name="lastName" onChange={onChangeHandler}></input>
						<input type="email" required placeholder='Email' name="email" onChange={onChangeHandler}></input>
						<input type="password" required placeholder='Password' name="password" onChange={onChangeHandler}></input>
						<Link to='/SigninPage'><button className='btn-signup' align="center" type="Submit"  onChange={onChangeHandler}>SIGN UP</button></Link>
					</div>

					<div className='signup-nav'>
						<span>Already have an account?<Link to='/SigninPage'><b>Login</b></Link></span>
					</div>

				</form >

			</div>

		</>
	)
}
export default SignupPage;