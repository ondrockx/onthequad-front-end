import React, { Component } from 'react';
import ItemsDisplay from './ItemsDisplay';
import LoadingContainer from '../components/LoadingContainer';
import { setPage, changePage, setCategory, changeCategory, setApp, getItemsIfApplicable } from '../actions';
import { connect } from 'react-redux';
import SignInBox from './SignInBox';
import AppPagerWrapper from './AppPagerWrapper';

const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
    category: state.category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getItemsIfApplicable()),
    setCategory: (id) => dispatch(setCategory(id)),
    setApp: () => dispatch(setApp('BROWSE')),
    setPage: (page) => dispatch(setPage(page))
  };
};

class Browse extends Component {
  componentWillMount() {
    this.props.setCategory(this.props.params.category);
    this.props.setPage(this.props.location.query.page);
    this.props.setApp();
    this.props.getItems();
  }

  componentWillReceiveProps(nextProps) {
    var changed = false;
    if (nextProps.params.category !== this.props.params.category){
      this.props.setCategory(nextProps.params.category);
      changed = true;
    }
    if (nextProps.location.query.page !== this.props.location.query.page) {
      this.props.setPage(nextProps.location.query.page);
      changed = true;
    }
    if (changed) {
      this.props.getItems();
    }
  }

  render() {
    const content = this.props.loading ? <LoadingContainer/> : <AppPagerWrapper><ItemsDisplay/></AppPagerWrapper>;
    return <SignInBox>{content}</SignInBox>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);