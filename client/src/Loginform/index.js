import React , {useState} from 'react';
import './index.css';
function Login(){
    const[email, setEmail] = useState(" ");
    const[password, setPassword] = useState(" ");

    function handleSubmit() {
        alert(email , password)
       
    }
    return( <><div class="body"><h1>Login Form</h1>
        <label>
            <div class="logname">
                <div class="email1">Email: </div>
                <div class="email2"><input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} /><br></br></div>
            </div>
            <div class="logpswd">
                <div class="pswd1">Password: </div>
                <div class="pswd2"><input type = "text" value = {password} onChange = {(e) => setPassword(e.target.value)} /><br></br></div>
            </div>
        </label>
        <div class="submit"><input type = "submit" value = "Submit" onClick = {handleSubmit} /></div>
        </div>
    </>
    );
}
export default Login;