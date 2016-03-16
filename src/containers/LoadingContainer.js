import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
  render() {
    return <div>Loading...</div>;
  };
};

const LoadingContainer = connect()(Loading);

export default LoadingContainer;