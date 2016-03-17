import React, { PropTypes } from 'react';
import { DropdownButton, MenuItem, Button } from 'react-bootstrap';

const AccountButton = ({accountClick, logoutClick, user}) => (
	<span>
	    <p className="navbar-text nav-usertext hidden-xs">Welcome back<br />{ user }</p>
	    <DropdownButton pullRight title={
	    	<span className="glyphicon glyphicon-user" aria-hidden="true"></span>
	    } id="bg-nested-dropdown" className="navbar-btn-half">
	      <MenuItem onClick={accountClick}>Account Settings</MenuItem>
	      <MenuItem divider/>
	      <MenuItem onClick={logoutClick}>Logout</MenuItem>
    </DropdownButton>
	</span>
);

AccountButton.propTypes = {
	user: PropTypes.string.isRequired,
	logoutClick: PropTypes.func.isRequired,
	accountClick: PropTypes.func.isRequired
};

export default AccountButton;