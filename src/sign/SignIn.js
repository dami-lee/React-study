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

    submit = () => {
        const { email, password } = this.state;

        const payload = {
            email: email,
            password: password
        }

        const url = 'http://stagings.ringleplus.com/api/v3/common/authenticate/simple_signin';
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
                if(result.id) {
                    alert('성공');
                } else {
                    alert(result.message);
                }
            },
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        const { email, password } = this.state;
        const {
            updateEmail,
            updatePassword,
            submit
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
                <Button
                    onClick={submit}>
                    Submit
                </Button>
            </>
        );
    }
}

export default SignIn;