import React from 'react';
import moment from 'moment';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: moment().format()
        }
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.setState({ time: moment().format() }), 1000
        )
    }

    componentWillUnmount() {
        console.log('이제 끌거임');
        clearInterval(this.timeId);
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