import React from 'react';
import moment from 'moment';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: moment().format('HH:mm:ss'),
            current: (Number(moment().format('HH')) * 3600) + (Number(moment().format('mm')) * 60) + Number(moment().format('ss')),
            message: ''
        }
    }

    updateTime = () => {
        this.setState({
            time: moment().format('HH:mm:ss'),
            current: (Number(moment().format('HH')) * 3600) + (Number(moment().format('mm')) * 60) + Number(moment().format('ss'))
        })
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.updateTime(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    render() {
        const { time, current } = this.state;
        const { name } = this.props;

        return (
            <>
                <h1>{time}</h1>
                <h2>
                    { 0 < current && current < 43199 && 'Good morning' }
                    { 43200 < current && current < 64799 && 'Good Afternoon' }
                    { 64800 < current && current < 86399 && 'Good Evening' }
                    , {name}
                </h2>
            </>
        );
    }
}

export default Timer;