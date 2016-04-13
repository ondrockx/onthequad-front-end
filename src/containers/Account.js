import React, { Component } from 'react';
import { getItemsIfApplicable, setPage, setCategory, setApp } from '../actions';
import { connect } from 'react-redux';
import LoadingContainer from '../components/LoadingContainer';
import SignInBox from './SignInBox';
import ItemsDisplay from './ItemsDisplay';
import AppPager from './AppPager';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loading: state.ui.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(getItemsIfApplicable()),
    setCategory: (id) => dispatch(setCategory(id)),
    setPage: (pageNum) => dispatch(setPage(pageNum)),
    setApp: () => dispatch(setApp('ACCOUNT'))
  };
};

class Browse extends Component {
  componentWillMount() {
    this.props.setCategory("Account");
    this.props.setPage(this.props.location.query.page);
    this.props.setApp();
    this.props.getItems();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.page !== this.props.location.query.page) {
      this.props.setPage(nextProps.location.query.page);
      this.props.getItems();
    }
  }

  render() {
    const { items, loading } = this.props;
    const content = loading ? <LoadingContainer/> : <AppPager><ItemsDisplay items={items}/></AppPager>;
    return <SignInBox>{content}</SignInBox>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);