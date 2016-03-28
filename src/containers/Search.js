import React, { Component } from 'react';
import ItemsDisplay from '../components/ItemsDisplay';
import LoadingContainer from '../components/LoadingContainer';
import { setPage, changePage, setCategory, changeCategory, setApp, setSearch, searchItemsIfApplicable } from '../actions';
import { connect } from 'react-redux';
import SignInBox from './SignInBox';
import AppPager from './AppPager';

const mapStateToProps = (state) => {
  return {
    items: state.items,
    loading: state.ui.loading,
    category: state.category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchItems: () => dispatch(searchItemsIfApplicable()),
    setCategory: (id) => dispatch(setCategory(id)),
    setApp: () => dispatch(setApp('SEARCH')),
    setPage: (page) => dispatch(setPage(page)),
    setSearch: (searchString) => dispatch(setSearch(searchString))
  };
};

class Search extends Component {
  componentWillMount() {
    this.props.setCategory(this.props.params.category);
    this.props.setPage(this.props.location.query.page);
    this.props.setSearch(this.props.location.query.search);
    this.props.setApp();
    this.props.searchItems();
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
    if (nextProps.location.query.search !== this.props.location.query.search) {
      this.props.setSearch(nextProps.location.query.search);
      changed = true;
    }
    if (changed) {
      this.props.searchItems();
    }
  }

  render() {
    const { items, loading } = this.props;
    const content = loading ? <LoadingContainer/> : <AppPager><ItemsDisplay {...items}/></AppPager>;
    return <SignInBox>{content}</SignInBox>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);