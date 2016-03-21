import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

class ProgressBox extends Component {
  render() {
    const { status, message } = this.props;
    var style;
    switch (status) {
      case -1: // loading
        style = "warning";
        break;
      case 1: // submitted
        style = "success";
        break;
      default: // error/other
        style = "danger";
        break;
    }
    return <Alert bsStyle={style}>
        <strong>{message}</strong>
      </Alert>;
  }
};

ProgressBox.propTypes = {
  status: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired
};

export default ProgressBox;