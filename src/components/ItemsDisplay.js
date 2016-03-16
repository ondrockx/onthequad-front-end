import React from 'react';
import _ from 'underscore';
import { Thumbnail, Col, Row, Grid } from 'react-bootstrap';

const Item = (item) => (
  <Col xs={6} sm={4} md={3}>
    <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
      <div className="itemdisplay-price">${item.cost.toFixed(2)}</div>
      <p className="itemdisplay-title">{item.title}</p>
    </Thumbnail>
  </Col>
);

const ItemsDisplay = (items) => (
  <Grid fluid>
    <Row>
      {_.map(items, (item) => {
        if(item) {
          return <Item key={item.id} {...item}/>;
        }
      })}
    </Row>
  </Grid>
);

export default ItemsDisplay;