import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './sign/SignIn';
import Feed from './feed/Feed';
import Widget from './widget/Widget';

import './index.css';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">Home</Link>
        <Link to="/Widget">Widget</Link>
        <Link to="/Feed">Feed</Link>
      </header>
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/Widget" component={Widget}/>
      <Route exact path="/Feed" component={Feed}/>
    </Router>
  );
}

export default App;
