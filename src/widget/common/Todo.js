import React from 'react';

const Todo = props => {
    return (
        <div>
            <input
                type="checkbox"
                id={props.name}/>
            <label
                htmlFor={props.name}>
                {props.title}
            </label>
            {props.children}
        </div>
    )
}

export default Todo;