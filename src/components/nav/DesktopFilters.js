import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const DesktopFilters = ({ category }) => (
  <div className="hidden-xs hidden-sm container">
    <Row>
      <Col md={4} lg={6}>
        <div className="navbar-brand navbar-category">
          <p className="category-title">{ category }</p>
        </div>
      </Col>
      <Col md={8} lg={6}>
        NavFilters
      </Col>
    </Row>
  </div>
);

DesktopFilters.propTypes = {
  category: PropTypes.string
};

export default DesktopFilters;