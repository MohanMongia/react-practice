import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid blue',
        margin: '10px auto'
    };

    return (
        <input type="text" style={style} onChange={props.changeName} value={props.name}></input>
    )
}

export default userInput;