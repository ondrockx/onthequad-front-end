'use strict';

var React = require('react');
var {Navbar, Nav, NavItem, MenuItem} = require('react-bootstrap');
var Navigation;

module.exports = Navigation = React.createClass({
    render: function () {
        return (
            <div>
                <div className="navmenu navmenu-default navmenu-fixed-left offcanvas-sm">
                  <a className="navmenu-brand visible-md visible-lg" href="#">On The Quad</a>
                  <ul className="nav navmenu-nav">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Account</a></li>
                  </ul>
                </div>

                <nav className="navbar navbar-default navbar-fixed-top hidden-md hidden-lg">
                    <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">On The Quad</a>
                    <button type="button" className="btn btn-default navbar-btn pull-right">
                        <span className="glyphicon glyphicon-user"></span>
                    </button>
                </nav>
            </div>
        );
    }
});
