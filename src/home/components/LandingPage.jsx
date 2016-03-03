'use strict';

var React = require('react');
var _ = require('underscore');
var {Row, Col, Jumbotron, Button} = require('react-bootstrap');
var UserActions = require('../../shared/actions/UserActions');
var ItemDisplay;

module.exports = ItemDisplay = React.createClass({
	login: function () {
        this.props.context.executeAction(UserActions.signIn);
	},
    render: function () {
        return (
        	<div className="landing-page">
            	<Jumbotron>
	                <h1>Welcome to OnTheQuad!</h1>
	                <p className="tagline">Online Classifieds for Students!</p>
	                <p><Button onClick={this.login} bsStyle="primary">Login</Button> with your UConn Account</p>
            	</Jumbotron>
        	</div>
        );
    }
});
