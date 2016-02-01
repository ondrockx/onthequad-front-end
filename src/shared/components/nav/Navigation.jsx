'use strict';

var React = require('react');
var Banner = require('./Banner');
var DesktopNav = require('./DesktopNav');
var MobileNav = require('./MobileNav');
var MobileBottomNav = require('./MobileBottomNav');
var Navigation;

module.exports = Navigation = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <Banner {...this.props} />
                        <DesktopNav {...this.props} />
                        <MobileNav {...this.props} />
                    </div>
                </nav>
                <div style={{marginTop: "158px"}}>
                    {this.props.children}
                </div>
                <MobileBottomNav {...this.props} />
            </div>
        );
    }
});
