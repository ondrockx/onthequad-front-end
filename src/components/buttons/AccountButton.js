import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const AccountButton = ({onClick, userName}) => (
	<span>
	    <p className="navbar-text nav-usertext hidden-xs">Welcome back<br />{ userName }</p>
	    <Button onClick={onClick} className="navbar-btn btn-user">
	        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
	    </Button>
	</span>
);

AccountButton.propTypes = {
	userName: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default AccountButton;