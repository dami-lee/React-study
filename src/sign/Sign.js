import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

class Sign extends React.Component {
    render() {
        return (
            <>
                <h1>Sign</h1>
                <SignIn/>
                <SignUp/>
            </>
        );
    }
}

export default Sign;