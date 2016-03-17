import React from 'react';
import NavFilters from './NavFilters';
import { ButtonToolbar, ButtonGroup, Button, Row, Col } from 'react-bootstrap';

const MobileFilters = ({ onClickNewPost }) => (
	<nav className="navbar navbar-inverse navbar-fixed-bottom hidden-md hidden-lg" role="navigation">  
		<Row>
      <Col xs={3} className="navbar-content">
        <Button className="navbar-btn pull-left navbar-left-button">
          <span className="glyphicon glyphicon-search"></span>
        </Button>       
      </Col>
      <Col xs={6} className="navbar-content">
        <NavFilters/>
      </Col>
      <Col xs={3} className="navbar-content">
        <Button bsStyle="default"
          className="navbar-btn pull-right navbar-right-button"
          onClick={onClickNewPost}>
          <span className="glyphicon glyphicon-plus" />
        </Button>
      </Col>
    </Row>
	</nav>
);

export default MobileFilters;