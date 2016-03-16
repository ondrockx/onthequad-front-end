import React, { Component } from 'react';
import ItemsDisplay from '../components/ItemsDisplay';
import LoadingContainer from './LoadingContainer';
import { connect } from 'react-redux';
import { getItems } from '../actions';

const mapStateToProps = (state) => {
  return {
    category: state.category,
    user: state.user,
    items: state.items,
    loading: state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => {
      dispatch(getItems());
    }
  };
};

class ItemsContainer extends Component {
  componentWillMount() {
    if (this.props.user && !this.props.items) {
      this.props.getItems();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user &&
      (!nextProps.items || nextProps.category !== this.props.category)) {
      this.props.getItems();
    }
  }

  render() {
    const { user, items, loading } = this.props;
    if (loading) {
      return <LoadingContainer/>;
    }
    if (user) {
      return <ItemsDisplay {...items}/>;
    }
    return <div>Not Logged In</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);