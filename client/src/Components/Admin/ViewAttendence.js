import { React } from 'react';
import './ViewAttendence.css';
// import axios from 'axios';
function ViewAttendence() {
    const data = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Emily' },
        { id: 6, name: 'Frank' },
        { id: 7, name: 'Grace' },
        { id: 8, name: 'Henry' },
        { id: 9, name: 'Isabel' },
        { id: 10, name: 'Jack' },
        { id: 11, name: 'Katie' },
        { id: 12, name: 'Liam' },
        { id: 13, name: 'Megan' },
        { id: 14, name: 'Nathan' },
        { id: 15, name: 'Olivia' },
        { id: 16, name: 'Peter' },
        { id: 17, name: 'Quinn' },
        { id: 18, name: 'Rachel' },
        { id: 19, name: 'Samuel' },
        { id: 20, name: 'Tina' },
        { id: 21, name: 'Uma' },
        { id: 22, name: 'Victor' },
        { id: 23, name: 'Wendy' },
        { id: 24, name: 'Xander' },
        { id: 25, name: 'Yasmine' },
        { id: 26, name: 'Zara' },
        { id: 27, name: 'Abby' },
        { id: 28, name: 'Ben' },
        { id: 29, name: 'Cameron' },
        { id: 30, name: 'Danielle' },
    ]

    return (
        <>
            <div className='viewattend'>

                <table>
                    <thead>
                        <tr>
                            <th colSpan={3}>Details</th>
                            <th colSpan={8}>Attendence</th>
                        </tr>
                        <tr>
                            <th>S:id</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>English</th>
                            <th>Hindi</th>
                            <th>Malayalam</th>
                            <th>Mathematics</th>
                            <th>Physics</th>
                            <th>Chemistry</th>
                            <th>SocialScience</th>
                            <th>Biology</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((index, val) => {
                                return (
                                    <tr key={val}>
                                        <td>{index.id}</td>
                                        <td>01-02-2023</td>
                                        <td>{index.name}</td>
                                        <td>
                                            <select>
                                                <option>Select</option>
                                                <option>Present</option>
                                                <option>Absent</option>
                                                <option>Holiday</option>                                           
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                <option>Select</option>
                                                <option>Present</option>
                                                <option>Absent</option>
                                                <option>Holiday</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                <option>Select</option>
                                                <option>Present</option>
                                                <option>Absent</option>
                                                <option>Holiday</option>                                               
                                            </select>
                                        </td>

                                        <td>
                                            <select>
                                                <option>Select</option>
                                                <option>Present</option>
                                                <option>Absent</option>
                                                <option>Holiday</option>                                                
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                <option>Select</option>
                                                <option>Present</option>
                                                <option>Absent</option>
                                                <option>Holiday</option>
                                                
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                <option>Select</option>
                                                <option>Present</option>
                                                <option>Absent</option>
                                                <option>Holiday</option>                                               
                                            </select>
                                        </td>

                                        <td>
                                            <select>
                                                <option>Select</option>
                                                <option>Present</option>
                                                <option>Absent</option>
                                                <option>Holiday</option>                                               
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                <option>Select</option>
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
            <div className='button'>
                    <button>Submit</button>
            </div>
        </>

    )
}
export default ViewAttendence;