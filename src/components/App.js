import React from 'react';
import Navigation from './nav/Navigation';

const App = React.createClass({
  render: function () {
    return (
      <div className="wrapper">
        <Navigation category={this.props.params.category} />
        
        { /* Load Main Page Components */ }
        { this.props.children }
      </div>
    );
  }
});

export default App;