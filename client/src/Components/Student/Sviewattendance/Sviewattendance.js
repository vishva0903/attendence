import React , {useState}from 'react';
import './Sviewattendance.css';
function Sviewattendance(){
    const[cls, setCls] = useState(" ");
    const[batch, setBatch] = useState(" ");
    const[date, setDate] = useState(" ");
    
   

    function handleSubmit() {
        alert(cls, batch, date)
       
    }
    return(
        <div class="acontainer"><div class="acontainer1">Attendance Status</div>
            <div class="acontainer2">
                <div class="cls">
                    <div class="cls1">Class </div>
                    <div class="cls2">
                        <select class="sel" value = {cls} onChange = {(e) => setCls(e.target.value)}>  
                            <option>I</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                            <option>VI</option>
                            <option>VII</option>
                            <option>VIII</option>
                            <option>IX</option>
                            <option>X</option>
                            <option>XI</option>
                            <option>XII</option>
                            
                        </select><br></br>
                    </div>
                </div> 

                <div class="div">
                    <div class="div1">Batch </div>
                    <div class="div2">
                        <select class="sel1" value = {batch} onChange = {(e) => setBatch(e.target.value)}>  
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                            <option>F</option>
                            <option>G</option>
                            <option>H</option>
                            <option>I</option>
                            <option>J</option>
                            <option>K</option>
                            <option>L</option>
                        </select><br></br>
                    </div>
                </div> 
                
                <div class="date">
                    <div class="div1">Date </div>
                    <div class="div2">
                    <input class="sel2" type = "date" value = {date} onChange = {(e) => setDate(e.target.value)} />
                        <br></br>
                    </div>
                </div> 
            
                <div class="searchbutton">
                    <input class="search" type="submit" value="Search" onClick = {handleSubmit}></input>
                </div>
               
            </div>
            <div class="acontainer3"></div>
            <div class="acontainer4"></div>
        </div>
        );
    }
    export default Sviewattendance;