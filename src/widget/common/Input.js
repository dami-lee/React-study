import React from 'react';

const Input = ({ type="text", name, children, ...props }) => {
    return (
        <div>
            <label
                htmlFor={name}>
                {children}
            </label>
            <input
                type={type}
                id={name}
                {...props}/>
        </div>
    );
}

export default Input;