import React from 'react';
import _ from 'lodash';
import { Row, Grid } from 'react-bootstrap';
import AccountItem from '../containers/AccountItem';

const AccountItemsDisplay = (items) => (
  <Grid fluid>
    <Row>
      {_.map(items, (item) => {
        if(item) {
          return <AccountItem key={item.id} item={item}/>;
        }
      })}
      { _.isEmpty(items) ? <div>No items found.</div> : "" }
    </Row>
  </Grid>
);

export default AccountItemsDisplay;