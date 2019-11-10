import React from 'react';
import Button from '../Components/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Sign extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    showSignIn = () => {
        this.setState({
            show: 'SignIn'
        })
    }

    showSignUp = () => {
        this.setState({
            show: 'SignUp'
        })
    }

    render() {
        const { show } = this.state;

        return (
            <>
                <h1>Sign</h1>
                <Button onClick={this.showSignIn}>Sign In</Button>
                <Button onClick={this.showSignUp}>Sign Up</Button>

                { show === 'SignIn' && <SignIn/> }
                { show === 'SignUp' && <SignUp/> }
            </>
        );
    }
}

export default Sign;