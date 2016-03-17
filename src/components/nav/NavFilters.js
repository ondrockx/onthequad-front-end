import React, { PropTypes } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Filters = ({ sort, sortBy }) => (
  <ButtonGroup>
    <Button bsStyle="default"
    className="navbar-btn"
    active={sort === 'newest'}
    onClick={() => sortBy('newest')}>
      <span className="glyphicon glyphicon-calendar" />
    </Button>
    <Button
    bsStyle="default"
    className="navbar-btn"
    active={sort === 'lowest_cost'}
    onClick={() => sortBy('lowest_cost')}>
      <span className="glyphicon glyphicon-sort-by-attributes"/>
    </Button>
    <Button
    bsStyle="default"
    className="navbar-btn"
    active={sort === 'highest_cost'}
    onClick={() => sortBy('highest_cost')}>
      <span className="glyphicon glyphicon-sort-by-attributes-alt"/>
    </Button>
  </ButtonGroup>
);

export default Filters;