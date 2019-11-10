import React from 'react';
import Input from '../Components/Input';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            email: '',
            password: ''
        }
    }

    updateFirstName = event => {
        this.setState({
            first_name: event.target.value
        })
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
        const { first_name, email, password } = this.state;
        const {
            updateFirstName,
            updateEmail,
            updatePassword
        } = this;

        return (
            <>
                <h2>Sign Up</h2>
                <Input
                    name="FirstName"
                    value={first_name}
                    onChange={updateFirstName}/>
                <Input
                    name="Email"
                    value={email}
                    onChange={updateEmail}/>
                <Input
                    type="password"
                    name="Password"
                    value={password}
                    onChange={updatePassword}/>
            </>
        );
    }
}

export default SignUp;