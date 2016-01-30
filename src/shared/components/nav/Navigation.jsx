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
                <div className="hidden-lg">
                    <nav className="navmenu navmenu-default navmenu-fixed-left offcanvas-sm in canvas-slid" role="navigation">
                        <ul className="nav navmenu-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">Category 1</a></li>
                            <li><a href="#">Category 2</a></li>
                        </ul>
                    </nav>
                </div>    
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <Banner {...this.props} />
                        <DesktopNav {...this.props} />
                        <MobileNav {...this.props} />
                    </div>
                </nav>
                {this.props.children}
                <MobileBottomNav {...this.props} />
            </div>
        );
    }
});
