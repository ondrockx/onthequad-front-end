import React, { PropTypes } from 'react';
import { ButtonToolbar, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import NavFilters from './NavFilters';

const DesktopFilters = ({ onClickNewPost, category }) => (
  <div className="hidden-xs hidden-sm container">
    <Row>
      <Col md={4} lg={6}>
        <div className="navbar-brand navbar-category">
          <p className="category-title">{ category }</p>
        </div>
      </Col>
      <Col md={8} lg={6}>
        <Row>
          <Col xs={6}>
            <ButtonToolbar>
              <NavFilters/>
              <ButtonGroup>
                <Button bsStyle="default" className="navbar-btn" onClick={onClickNewPost}>
                  <span>Create Post </span>
                  <span className="glyphicon glyphicon-plus" />
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
          <Col xs={6}>
            <form className="navbar-form" role="search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term" />
                <div className="input-group-btn">
                  <Button><span className="glyphicon glyphicon-search" /></Button>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

DesktopFilters.propTypes = {
  category: PropTypes.string
};

export default DesktopFilters;