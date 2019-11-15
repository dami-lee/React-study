import React from 'react';

const Input = ({type="text", name, ...props}) => {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input type={type} id={name} {...props} />
        </div>
    );
}

export default Input;