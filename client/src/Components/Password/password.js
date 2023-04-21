import React , {useState} from 'react';
import './password.css';
function Password(){
    const[newpswd, setNewpswd] = useState(" ");
    const[confpswd, setConfpswd] = useState(" ");

    function handleSubmit() {
        alert(newpswd , confpswd)
       
    }
    return( <><div class="pswdbody"><h1>Reset Password</h1>
        <div>Strong password include numbers, letters and symbols</div>
        <label>
            <div class="npswd">
                <div class="npswd1">New Password </div>
                <div class="npswd2"><input type = "text" value = {newpswd} onChange = {(e) => setNewpswd(e.target.value)} /><br></br></div>
            </div>
            <div class="cpswd">
                <div class="cpswd1">Confirm Password </div>
                <div class="cpswd2"><input type = "text" value = {confpswd} onChange = {(e) => setConfpswd(e.target.value)} /><br></br></div>
            </div>
        </label>
        <a href="http://localhost:3000/Login"><input class="resetpswd" type = "submit" value = "RESET PASSWORD" onClick = {handleSubmit} /></a>
        </div>
    </>
    );
}
export default Password;