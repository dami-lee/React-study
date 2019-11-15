import React from 'react';
import Input from './common/Input';
import Button from './common/Button';

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

    submit = () => {
        const { first_name, email, password } = this.state;

        const payload = {
            first_name: first_name,
            email: email,
            password: password
        }

        const url = 'http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signup';
        const opts = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }

        fetch(
            url, opts
        )
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                if(result.success) {
                    alert('성공');
                } else {
                    alert('실패');
                }
                console.log(result);
            }
        )
    }

    render() {
        const { first_name, email, password } = this.state;
        const {
            updateFirstName,
            updateEmail,
            updatePassword,
            submit
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
                <Button
                    onClick={submit}>
                    Submit
                </Button>
            </>
        );
    }
}

export default SignUp;