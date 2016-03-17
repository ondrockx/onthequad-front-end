import React, { PropTypes } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Filters = () => (
  <ButtonGroup>
    <Button bsStyle="default" className="navbar-btn" active>
      <span className="glyphicon glyphicon-calendar" />
    </Button>
    <Button bsStyle="default" className="navbar-btn">
      <span className="glyphicon glyphicon-sort-by-attributes" />
    </Button>
    <Button bsStyle="default" className="navbar-btn">
      <span className="glyphicon glyphicon-sort-by-attributes-alt" />
    </Button>
  </ButtonGroup>
);

export default Filters;