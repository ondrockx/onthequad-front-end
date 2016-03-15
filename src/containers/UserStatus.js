import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AccountButton from '../components/buttons/AccountButton';
import LoginButton from '../components/buttons/LoginButton';

class UserStatus extends Component {
	render() {
		const { user } = this.props;
		if (user) {
			return <AccountButton user={user} onClick={e => {
				e.preventDefault();
				this.context.router.push('/account');
			}}/>;
		} else {
			return <LoginButton onClick={e => {
				e.preventDefault();
			}}/>;
		}
	}
}

UserStatus.contextTypes = {
	router: PropTypes.object.isRequired
};

UserStatus.propTypes = {
	user: PropTypes.string
};

UserStatus = connect()(UserStatus);

export default UserStatus;