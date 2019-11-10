import React from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    updateEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    updatePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const { email, password } = this.state;
        const {
            updateEmail,
            updatePassword
        } = this;

        return (
            <>
                <h2>Sign In</h2>
                <Input
                    name="Email"
                    value={email}
                    onChange={updateEmail}/>
                <Input
                    type="password"
                    name="Password"
                    value={password}
                    onChange={updatePassword}/>
                <Button>
                    Submit
                </Button>
            </>
        );
    }
}

export default SignIn;