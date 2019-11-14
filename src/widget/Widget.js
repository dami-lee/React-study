import React from 'react';
import Timer from './Timer';

class Widget extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: 'time' // intro, time
        }
    }

    toggleShow = () => {
        if ( this.state.show === 'time' ) {
            this.setState({
                show: 'intro'
            })
        } else {
            this.setState({
                show: 'time'
            })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.show === 'time' && <Timer/>
                }
                <button onClick={this.toggleShow}>changed show state</button>
            </>
        );
    }
}

export default Widget;