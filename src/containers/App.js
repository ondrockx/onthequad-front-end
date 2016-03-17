import React, { Component } from 'react';
import Navigation from './nav/Navigation';
import SignInBox from './SignInBox';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation/>
        { /* Load Main Page Components only if Signed In */ }
        <SignInBox>
          {this.props.children}
        </SignInBox>
      </div>
    );
  }
};

export default App;