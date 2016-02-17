'use strict';

var React = require('react');
var Banner = require('./Banner');
var DesktopNav = require('./DesktopNav');
var MobileNav = require('./MobileNav');
var MobileBottomNav = require('./MobileBottomNav');
var MobileNavCategories = require('./MobileNavCategories');
var Navigation;

module.exports = Navigation = React.createClass({
    render: function () {
        return (
            <div>
                <div className="navmenu navmenu-default navmenu-fixed-left offcanvas" role="navigation">
                    <MobileNavCategories {...this.props} />
                </div>
                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <Banner {...this.props} />
                        <DesktopNav {...this.props} />
                        <MobileNav {...this.props} />
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div>
                <MobileBottomNav {...this.props} />
            </div>
        );
    }
});
