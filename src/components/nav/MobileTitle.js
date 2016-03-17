import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const MobileTitle = ({ category }) => (
  <div className="mobile-nav hidden-lg hidden-md">
    <Row>
    	<Col xs={12}>
      	<div className="navbar-brand navbar-category">
          <p className="category-title">{category}</p>
        </div>
      </Col>
    </Row>
  </div>
);

MobileTitle.propTypes = {
  category: PropTypes.string
};

export default MobileTitle;