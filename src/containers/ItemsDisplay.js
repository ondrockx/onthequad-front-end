import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Grid } from 'react-bootstrap';
import { openItemModal, closeItemModal } from '../actions';
import Item from '../components/Item';
import ItemModal from '../components/ItemModal';

const ItemsDisplay = ({items, closeItemModal, onClickItem, itemModal}) => (
  <div>
    <ItemModal show={itemModal ? true : false} onHide={closeItemModal} item={itemModal} />
    <Grid fluid>
      <Row>
        {_.map(items, (item) => {
          if(item) {
            return <Item key={item.id} item={item || {}} onClickItem={onClickItem} />;
          }
        })}
        { _.isEmpty(items) ? <div>No items found.</div> : "" }
      </Row>
    </Grid>
  </div>
);

const mapStateToProps = (state) => ({
  itemModal: state.ui.itemModal
});

const mapDispatchToProps = (dispatch) => ({
  onClickItem: (item) => dispatch(openItemModal(item)),
  closeItemModal: () => dispatch(closeItemModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsDisplay);