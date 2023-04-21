import React , {useState} from 'react';
import './login.css';
function Login(){
    const[email, setEmail] = useState(" ");
    const[password, setPassword] = useState(" ");

    function handleSubmit() {
        alert(email , password)
       
    }
    return( <><div class="loginbody"><h1>Login</h1>
        <label>
            <div class="logname">
                <div class="userid1">User Id </div>
                <div class="userid2"><input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} /><br></br></div>
            </div>
            <div class="logpswd">
                <div class="psswd1">Password </div>
                <div class="psswd2"><input type = "text" value = {password} onChange = {(e) => setPassword(e.target.value)} /><br></br></div>
            </div>
        </label>
        <div class="forgot"><a href="http://localhost:3000/Password">Forgot Password ?</a></div>
            <a href="http://localhost:3000/SDashboard"><input class="signinbtn" type = "submit" value = "SIGN IN" onClick = {handleSubmit} /></a>
        <div class="lhead">Dont't have an account ?</div>
        <div class="signuplnk"><a href="http://localhost:3000/Signup">Sign up </a></div>
        </div>
    </>
    );
}
export default Login;