import React from 'react';
import Navigation from './nav/Navigation';

const App = React.createClass({
    render: function () {
        return (
            <div className="wrapper">
                <Navigation changeCategory={this.changeCategory} />
                
                { /* Load Main Page Components */ }
                { this.props.children }
            </div>
        );
    }
});

export default App;