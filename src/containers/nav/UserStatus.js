import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../actions';
import AccountButton from '../../components/nav/buttons/AccountButton';
import LoginButton from '../../components/nav/buttons/LoginButton';
import { accountURL, landingURL } from '../../config';

class UserStatus extends Component {
	render() {
		const { user, login, logout } = this.props;
		if (user) {
			return <AccountButton
				user={user}
				accountClick={e => {
					e.preventDefault();
					this.context.router.push(accountURL);
				}}
				logoutClick={e => {
					e.preventDefault();
					logout();
					this.context.router.push(landingURL);
				}}/>;
		} else {
			return <LoginButton onClick={e => {
				e.preventDefault();
				login();
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

const mapStateToProps = (state) => {
	return {
		user: state.user ? state.user.name : ""
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(login());
    },
    logout: () => {
    	dispatch(logout());
    } 
  };
};

UserStatus = connect(mapStateToProps, mapDispatchToProps)(UserStatus);

export default UserStatus;