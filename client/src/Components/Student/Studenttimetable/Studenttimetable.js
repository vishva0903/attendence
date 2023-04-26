import React , {useState}from 'react';
import './Studenttimetable.css';
function Studenttimetable(){
    const[clss, setClss] = useState(" ");
    const[division, setDivision] = useState(" ");
    
    
   

    function handleSubmit() {
        alert(clss, division)
       
    }
    
    return(
        <div class="stdttcontainer"><div class="stdttcontainer1">Timetable</div>
            <div class="stdttcontainer2">
                <div class="stdttcls">
                    <div class="stdttcls1">Class </div>
                    <div class="stdttcls2">
                        <select class="stdttdrop1" value = {clss} onChange = {(e) => setClss(e.target.value)}>  
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

                <div class="stdttdiv">
                    <div class="stdttdiv1">Batch </div>
                    <div class="stdttdiv2">
                        <select class="stdttdrop2" value = {division} onChange = {(e) => setDivision(e.target.value)}>  
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                            <option>D</option>
                            <option>E</option>
                        </select><br></br>
                    </div>
                </div> 
                
                
                <div class="ttsearchbutton">
                    <input class="ttsearch" type="submit" value="Search" onClick = {handleSubmit}></input>
                </div>
               
            </div>
            </div>
        );
    }
    export default Studenttimetable;