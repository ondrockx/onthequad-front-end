import React, { Component } from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';
import { Input } from 'react-bootstrap';

class SignInBox extends Component {
	render() {
		if (this.props.user.userId) {
			return this.props.children;
		} else {
			return <div>
				Please <a href="#" onClick={this.props.login}>Sign In</a> to continue.
			</div>;
		}
	}
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: () => dispatch(login())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInBox);