import {React , useState} from 'react';
import axios from 'axios';
function AddClass(){

    const [form,setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
        console.log(form);
    }

    const onSubmitHandler = (event) => {
        console.log(form,"from data")
        
        axios.post("http://localhost:5000/user123",form)
        .then((response) => {
            console.log(response.data);
        })
        .catch((err) => console.log(err))
        event.preventDefault();
        
    }

    return(
        <>
            <form onSubmit={onSubmitHandler}>
            <label>Class</label>
            <input type="text" name="Class" onChange={onChangeHandler}></input><br/>
            <label>Division</label>
            <input type="text" name="Division" onChange={onChangeHandler}></input><br/>
            <label>Teacher Name</label>
            <input type="text" name="TeacherName" onChange={onChangeHandler}></input><br/>
            <label>Classroom Number</label>
            <input type="text" name="ClassroomNumber" onChange={onChangeHandler}></input><br/>

            <button type="Submit">Submit</button>
            </form>    
        </>
    )
}
export default AddClass;