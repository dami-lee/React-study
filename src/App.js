import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './sign/SignIn';
import Feed from './feed/Feed';

function App() {
  return (
    <Router>
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/Feed" component={Feed}/>
    </Router>
  );
}

export default App;
