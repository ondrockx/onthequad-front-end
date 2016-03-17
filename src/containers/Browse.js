import React, { Component } from 'react';
import ItemsDisplay from '../components/ItemsDisplay';
import LoadingContainer from '../components/LoadingContainer';
import { changeCategory, setApp } from '../actions';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import SignInBox from './SignInBox';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loading: state.ui.loading,
    category: state.category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => {
      dispatch(getItems());
    },
    updateCategory: (id) => {
      dispatch(changeCategory(id));
    },
    setApp: () => {
      dispatch(setApp('BROWSE'));
    }
  };
};

class Browse extends Component {
  componentWillMount() {
    this.props.updateCategory(this.props.params.category);
    this.props.setApp();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.category && nextProps.params.category !== this.props.params.category){
      this.props.updateCategory(nextProps.params.category);
    }
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