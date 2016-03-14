'use strict';

import React from 'react';
import _ from 'underscore';
import { Row, Col, Jumbotron, Button } from 'react-bootstrap';

const LandingPage = React.createClass({
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

export default LandingPage;