import React , {useState} from 'react';
import './index.css';
function Regform(){
    const[name, setName] = useState(" ");
    const[grade, setGrade] = useState(" ");
    const[admno, setAdmno] = useState(" ");
    const[rollno, setRollno] = useState(" ");
    const[dob, setDob] = useState(" ");
    const[age, setAge] = useState(" ");
    // const[gender, setGender] = useState(" ");
    const[address, setAddress] = useState(" ");
    const[phnno, setPhnno] = useState(" ");
    const[email, setEmail] = useState(" ");
    const[fathername, setFathername] = useState(" ");    
    const[fatherphn, setFatherphn] = useState(" ");  
    const[mothername, setMothername] = useState(" ");    
    const[motherphn, setMotherphn] = useState(" ");      
    const[emrgphn, setEmrgphn] = useState(" ");      
    

    function handleSubmit() {
        alert(name, grade, admno, rollno, dob, age, address, phnno, email, fathername, fatherphn, mothername, motherphn, emrgphn)
       
       
    }


    return( <><div class="body"><h1>REGISTRATION FORM</h1><br></br>
        <h3>PERSONAL DETAILS</h3>
        <label>
            <div class="name">
                <div class="name1">Student's Name </div>
                <div class="name2"><input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} /><br></br></div>
            </div>
            <div class="grade">
                <div class="grade1">Class </div>
                <div class="grade2"><input type = "text" value = {grade} onChange = {(e) => setGrade(e.target.value)} /><br></br></div>
            </div>
            <div class="admno">
                <div class="admno1">Admno </div>
                <div class="admno2"><input type = "text" value = {admno} onChange = {(e) => setAdmno(e.target.value)} /><br></br></div>
            </div>
            <div class="rollno">
                <div class="rollno1">Rollno </div>
                <div class="rollno2"><input type = "text" value = {rollno} onChange = {(e) => setRollno(e.target.value)} /><br></br></div>
            </div>
            <div class="dob">
                <div class="dob1">DOB </div>
                <div class="dob2"><input type = "date" value = {dob} onChange = {(e) => setDob(e.target.value)} /><br></br></div>
            </div>
            <div class="age">
                <div class="age1">Age </div>
                <div class="age2"><input type = "number" value = {age} onChange = {(e) => setAge(e.target.value)} /><br></br></div>
            </div>
            <div class="gender">
                <div class="gender1">Gender </div>
                <div class="gender2">
                    <div>
                        <input type="radio" id="name" name="opt1"></input> 
                            <label for="name">Male</label>
                    </div>
                    <div class="type">
                        <input type="radio" id="name" name="opt1"></input>
                            <label for="name">Female</label>
                    </div>   
                </div>
            </div>
            <div class="address">
                <div class="address1">Permanent Address</div>
                <div class="address2"><textarea rows = "3" value = {address} onChange = {(e) => setAddress(e.target.value)}></textarea><br/></div>
            </div>
            <div class="number">
                <div class="number1">Phone Number</div>
                <div class="number2"><input type = "text" value = {phnno} onChange = {(e) => setPhnno(e.target.value)} /><br></br></div>
            </div>
            <div class="email">
                <div class="email1">E-mail</div>
                <div class="email2"><input type = "text" value = {email} onChange = {(e) => setEmail(e.target.value)} /><br></br></div>
            </div>
            <div class="fathername">
                <div class="fname1">Father's Name</div>
                <div class="fname2"><input type = "text" value = {fathername} onChange = {(e) => setFathername(e.target.value)} /><br></br></div>
            </div>
            <div class="fphnno">
                <div class="fphnno1">Father's PhnNo</div>
                <div class="fphnno2"><input type = "text" value = {fatherphn} onChange = {(e) => setFatherphn(e.target.value)} /><br></br></div>
            </div>
            <div class="mothername">
                <div class="mname1">Mother's Name</div>
                <div class="mname2"><input type = "text" value = {mothername} onChange = {(e) => setMothername(e.target.value)} /><br></br></div>
            </div>
            <div class="mphnno">
                <div class="mphnno1">Mother's PhnNo</div>
                <div class="mphnno2"><input type = "text" value = {motherphn} onChange = {(e) => setMotherphn(e.target.value)} /><br></br></div>
            </div>
            <div class="phnno">
                <div class="phnno1">Emergency Contact</div>
                <div class="phnno2"><input type = "text" value = {emrgphn} onChange = {(e) => setEmrgphn(e.target.value)} /><br></br></div>
            </div>
        </label>
        <div class="submit">
            <input type = "submit" value = "Submit" onClick = {handleSubmit} />
        </div>
        </div>
        </>
    );
}
export default Regform;