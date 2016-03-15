import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './nav/Navigation';
import { changeCategory, startGAuth } from '../actions';

class MainApp  extends Component {
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
        <div>Browse: { this.props.params.category }</div>
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

const App = connect(
  () => ({}),
  mapDispatchToProps
)(MainApp);

export default App;