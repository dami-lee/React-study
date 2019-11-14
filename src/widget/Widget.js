import React from 'react';
import Timer from './Timer';
import Input from './common/Input';

class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 'main', // intro, main
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

    render() {
        const { show, name, todoShow, todo } = this.state;
        const {
            updateName,
            enterName,
            updateTodo,
            enterTodo
        } = this;

        return (
            <>
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
                    {
                        !todoShow ?
                        <Input
                            name="todo"
                            value={todo}
                            onChange={updateTodo}
                            onKeyDown={enterTodo}>
                            What is your main focus for today?
                        </Input> :
                        <div>
                            <input type="checkbox"/>
                            <label>{todo}</label>
                            <button>[delete]</button>
                        </div>
                    }
                </div>
            }
            </>
        );
    }
}

export default Widget;