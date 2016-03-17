import React from 'react';
import _ from 'lodash';
import { Button, Thumbnail, Col, Row, Grid } from 'react-bootstrap';
import config from '../config';

const AccountItem = (item) => (
  <Col xs={6} sm={4} md={3}>
    <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
      <Button className="itemdisplay-button"><span className="glyphicon glyphicon-cog"/></Button>
      <div className="itemdisplay-price">${item.cost.toFixed(2)}</div>
      <p className="itemdisplay-title">{config.decodeText(item.title)}</p>
    </Thumbnail>
  </Col>
);

const AccountItemsDisplay = (items) => (
  <Grid fluid>
    <Row>
      {_.map(items, (item) => {
        if(item) {
          return <AccountItem key={item.id} {...item}/>;
        }
      })}
      { _.isEmpty(items) ? <div>No items found.</div> : "" }
    </Row>
  </Grid>
);

export default AccountItemsDisplay;