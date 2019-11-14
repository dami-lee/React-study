import React from 'react';
import Timer from './Timer';
import Input from './common/Input';

class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 'intro', // intro, main
            name: ''
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

    render() {
        const { show, name } = this.state;
        const {
            updateName,
            enterName
        } = this;

        return (
            <>
            {
                show === 'intro' ?
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={updateName}
                    onKeyDown={enterName}>
                    Hello, what your name?
                </Input> :
                <div>
                    <Timer
                        name={name}/>
                    <div>
                        What is your main focus for today?
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>blabla</label>
                        <button>[delete]</button>
                    </div>
                </div>
            }
            </>
        );
    }
}

export default Widget;