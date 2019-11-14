import React from 'react';

const Input = ({ type="text", name, children, ...props }) => {
    return (
        <div class="input-container">
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