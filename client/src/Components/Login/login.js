import React , {useState} from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login(){
     // form handler
	const [form, setForm] = useState({})
	const onChangeHandler = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
		console.log(form);
    }

    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
            await axios
                .post("http://localhost:5000/StudentRoutes/Login", form)
                .then((response) => {
                    console.log(response.data);
                    navigate("/Signup");
                })
                .catch((err) => console.log(err));
        };
    return( <><div class="loginbody">
        <form className='signup-form' layout="vertical" onSubmit={onSubmitHandler}>

        <h1>Login</h1>
        <label>
            <div class="logname">
                <div class="userid1">User Id </div>
                <div class="userid2"><input type = "text" name = "userId" onChange={onChangeHandler} /><br></br></div>
            </div>
            <div class="logpswd">
                <div class="psswd1">Password </div>
                <div class="psswd2"><input type = "password" name = "password" onChange={onChangeHandler} /><br></br></div>
            </div>
        </label>
        <div class="forgot"><a href="http://localhost:3000/Password">Forgot Password ?</a></div>
           <input class="signinbtn" type = "submit" value = "SIGN IN" onChange={onChangeHandler} />
        <div class="lhead">Dont't have an account ?</div>
        <div class="signuplnk"><a href="http://localhost:3000/Signup">Sign up </a></div>

        </form>
        </div>
    </>
    );
}
export default Login;