import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const AccountButton = ({onClick, user}) => (
	<span>
	    <p className="navbar-text nav-usertext hidden-xs">Welcome back<br />{ user }</p>
	    <Button onClick={onClick} className="navbar-btn btn-user">
	        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
	    </Button>
	</span>
);

AccountButton.propTypes = {
	user: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default AccountButton;