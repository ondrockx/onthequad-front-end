import React, { Component } from 'react';
import { changeCategory, setApp } from '../actions';
import { connect } from 'react-redux';
import SignInBox from './SignInBox';

const mapDispatchToProps = (dispatch) => {
  return {
    updateCategory: (id) => {
      dispatch(changeCategory(id));
    },
    setApp: () => {
      dispatch(setApp('ACCOUNT'));
    }
  };
};

class Browse extends Component {
  componentWillMount() {
    this.props.updateCategory("Account");
    this.props.setApp();
  }

  componentWillUnmount() {
    this.props.updateCategory("");
  };

  render() {
    return <SignInBox><div>Account Page</div></SignInBox>;
  }
}

export default connect(()=>({}), mapDispatchToProps)(Browse);