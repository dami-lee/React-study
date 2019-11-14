import React from 'react';
import Timer from './Timer';
import Input from './common/Input';
import Todo from './common/Todo';

import './Widget.css';

class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 'intro', // intro, main
            name: '',
            todoShow: false,
            todo: ''
        }
    }

    updateName = event => {
        this.setState({
            name: event.target.value
        })
    }

    enterName = event => {
        if ( event.key === 'Enter' ) {
            this.setState({
                show: 'main'
            })
        }
    }

    updateTodo = event => {
        this.setState({
            todo: event.target.value
        })
    }

    enterTodo = event => {
        if ( event.key === 'Enter' ) {
            this.setState({
                todoShow: true
            })
        }
    }

    deleteTodo = () => {
        this.setState({
            todoShow: false,
            todo: ''
        })
    }

    render() {
        const { show, name, todoShow, todo } = this.state;
        const {
            updateName,
            enterName,
            updateTodo,
            enterTodo,
            deleteTodo
        } = this;

        return (
            <div class="widget center">
            {
                show === 'intro' ?
                <Input
                    name="name"
                    value={name}
                    onChange={updateName}
                    onKeyDown={enterName}>
                    Hello, what your name?
                </Input> :
                <div>
                    <Timer
                        name={name}/>
                    <div class="todo-container end">
                    {
                        !todoShow ?
                        <Input
                            name="todo"
                            value={todo}
                            onChange={updateTodo}
                            onKeyDown={enterTodo}>
                            What is your main focus for today?
                        </Input> :
                        <Todo
                            name="todoItem"
                            title={todo}>
                            <button onClick={deleteTodo}>[delete]</button>
                        </Todo>
                    }
                    </div>
                </div>
            }
            </div>
        );
    }
}

export default Widget;