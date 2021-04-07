import React from 'react';
const validation = (props) => {
    let text=(
        <p>Text too short</p>
    );
    if(props.inputLength > 5)
    {
        text = (
            <p>Text long enough</p>
        );
    }

    return (
        <div>
            {text}
        </div>
    );
};

export default validation;