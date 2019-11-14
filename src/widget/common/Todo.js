import React from 'react';

const Todo = props => {
    return (
        <div class="todo-item center">
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