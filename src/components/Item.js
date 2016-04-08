import React, { PropTypes } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';
import { decodeText } from '../config';

const Item = ({ item, onClickItem }) => (
  <Col xs={6} sm={4} md={3}>
    <Thumbnail src="/images/thumbnaildiv.png" alt="242x200" onClick={() => onClickItem(item)}>
      <div className="itemdisplay-price">${item.cost.toFixed(2)}</div>
      <p className="itemdisplay-title">{decodeText(item.title)}</p>
    </Thumbnail>
  </Col>
);

export default Item;