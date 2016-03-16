import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './nav/Navigation';
import { changeCategory, startGAuth } from '../actions';

class BrowseApp extends Component {
  componentWillMount() {
    this.props.updateCategory(this.props.params.category);
    this.props.startGAuth();
  }

  componentWillReceiveProps(nextProps) {
    this.props.updateCategory(nextProps.params.category);
  }

  render() {
    return (
      <div className="wrapper">
        <Navigation/>
        
        { /* Load Main Page Components */ }
        { this.props.children }
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCategory: (id) => {
      dispatch(changeCategory(id));
    },
    startGAuth: () => {
      dispatch(startGAuth());
    }
  };
};

const Browse = connect(
  () => ({}),
  mapDispatchToProps
)(BrowseApp);

export default Browse;