import React , {useState} from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";
function Login(){
    const[email, setEmail] = useState(" ");
    const[password, setPassword] = useState(" ");

    const navigate = useNavigate();


    function handleSubmit() {
        alert(email , password)
        navigate("/SDashboard");
       
    }
    return( <><div class="loginbody"><h1>Login</h1>
        <label>
            <div class="logname">
                <div class="userid1">User Id </div>
                <div class="userid2"><input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} /><br></br></div>
            </div>
            <div class="logpswd">
                <div class="psswd1">Password </div>
                <div class="psswd2"><input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} /><br></br></div>
            </div>
        </label>
        <div class="forgot"><a href="http://localhost:3000/Password">Forgot Password ?</a></div>
           <input class="signinbtn" type = "submit" value = "SIGN IN" onClick = {handleSubmit} />
        <div class="lhead">Dont't have an account ?</div>
        <div class="signuplnk"><a href="http://localhost:3000/Signup">Sign up </a></div>
        </div>
    </>
    );
}
export default Login;