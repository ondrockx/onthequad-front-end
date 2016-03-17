import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const LoginButton = ({onClick}) => (
	<span>
	    <Button onClick={onClick} className="navbar-btn">
	        <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
	    </Button>
	</span>
);

LoginButton.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default LoginButton;