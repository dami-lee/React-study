import React from 'react';
import { Link } from 'react-router-dom';
import Input from './common/Input';
// import Button from './common/Button';

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
                {/* <Button
                    onClick={submit}>
                    Submit
                </Button> */}
                <Link to="/Feed">Submit</Link>
            </>
        );
    }
}

export default SignIn;