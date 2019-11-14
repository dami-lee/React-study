import React from 'react';
import moment from 'moment';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: moment().format()
        }
    }
    render() {
        const { time } = this.state;

        return (
            <>
                <h1>{time}</h1>
            </>
        );
    }
}

export default Timer;