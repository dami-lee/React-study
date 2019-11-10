import React from 'react';
import Button from '../Components/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Sign extends React.Component {
    render() {
        return (
            <>
                <h1>Sign</h1>
                <Button>Sign In</Button>
                <Button>Sign Up</Button>
                
                <SignIn/>
                <SignUp/>
            </>
        );
    }
}

export default Sign;