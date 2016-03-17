import React, { Component } from 'react';
import { changeCategory, setApp } from '../actions';
import { connect } from 'react-redux';
import LoadingContainer from '../components/LoadingContainer';
import SignInBox from './SignInBox';
import ItemsDisplay from '../components/ItemsDisplay';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loading: state.ui.loading
  };
};

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
    const { items, loading } = this.props;
    const content = loading ? <LoadingContainer/> : <ItemsDisplay {...items}/>;
    return <SignInBox>{content}</SignInBox>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);