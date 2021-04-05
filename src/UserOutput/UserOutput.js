import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Hi there, My name is {props.name}</p>
            <p>My age is 21 yrs</p>
        </div>
    )
}

export default userOutput;