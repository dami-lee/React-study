import React from 'react';
import moment from 'moment';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: moment().format('HH:mm:ss')
        }
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.setState({ time: moment().format('HH:mm:ss') }), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    render() {
        const { time } = this.state;
        const { name } = this.props;

        return (
            <>
                <h1>{time}</h1>
                <h2>Good morning, {name}</h2>
            </>
        );
    }
}

export default Timer;