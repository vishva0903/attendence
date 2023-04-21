import { React, useState } from 'react';
import './Attendance.css';
import axios from 'axios';
function Attendance() {

    const [form, setForm] = useState({})
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        console.log(form);
    }

    const onSubmitHandler = (event) => {
        console.log(form, "from data")

        axios.post("http://localhost:5000/user123", form)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => console.log(err))
        event.preventDefault();

    }

    const data = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Emily' },
        { id: 6, name: 'Frank' },
        { id: 7, name: 'Grace' },
        { id: 8, name: 'Henry' }
    ]

    return (
        <>
            <form onSubmit={onSubmitHandler}>

                <div className='main-box'>

                    <h4>ADD ATTENDANCE</h4>

                    <div className='select-opt'>

                        <div className="Date">
                            <input type="Date" name="date" onChange={onChangeHandler}></input>
                        </div>

                        <div className='Select-Class'>
                            <select>
                                <option>Select Class</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>

                        <div className='Division'>
                            <select>
                                <option>Division</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                        </div>

                        <div className='Select-Subject'>
                            <select>
                                <option>Select Subject</option>
                                <option>Subject1</option>
                                <option>Subject2</option>
                                <option>Subject3</option>
                                <option>Subject4</option>
                                <option>Subject5</option>
                                <option>Subject6</option>
                                <option>Subject7</option>
                                <option>Subject8</option>
                                <option>Extra-curricular Activity</option>
                            </select>
                        </div>

                        <div className='Period'>
                            <select>
                                <option>Period</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>Special Class</option>

                            </select>
                        </div>

                        <button class="button-88" role="button">Submit</button>

                    </div>
                    <div className='attendance-table'>

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Roll No</th>
                                    <th id='name'>Name</th>
                                    <th>Mark Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((index, val) => {
                                        return (
                                            <tr key={val}>
                                                <td>{index.id}</td>
                                                <td>{index.name}</td>
                                                <td>
                                                    <select name="" id="">
                                                        <option>select option</option>
                                                        <option>Present</option>
                                                        <option>Absent</option>
                                                        <option>Holiday</option>

                                                        
                                                    </select>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>

                </div>


            </form >
        </>
    )
}
export default Attendance;