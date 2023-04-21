import { React, useState } from 'react';
import './DashAdmin.css';
function DashAdmin() {

    return (
        <>
            <div className='dash'>
                <h1>Admin</h1>
            </div>
            <div className='sidebar'>
                <div className='link'>
                    <a href='/ViewStudent'><h5>Student</h5></a>
                    <a href='/ViewTteacher'><h5>Teacher</h5></a>
                </div>
            </div>
        </>
    )
}

export default DashAdmin;