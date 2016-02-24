'use strict';

var React = require('react');
var Banner = require('./Banner');
var DesktopNav = require('./DesktopNav');
var MobileNav = require('./MobileNav');
var MobileBottomNav = require('./MobileBottomNav');
var MobileNavCategories = require('./MobileNavCategories');
var NavCategories = require('./NavCategories');
var {Row, Col} = require('react-bootstrap');
var Navigation;

module.exports = Navigation = React.createClass({
    render: function () {
        var onOff = <OnOffSwitch {...this.props} />
        return (
            <div>
                <div className="navmenu navmenu-default navmenu-fixed-left offcanvas-md hidden-lg" role="navigation">
                    <MobileNavCategories {...this.props} />
                </div>
                <div className="navmenu navmenu-default navmenu-fixed-left visible-lg" role="navigation">
                    <NavCategories {...this.props} onOff={} />
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
