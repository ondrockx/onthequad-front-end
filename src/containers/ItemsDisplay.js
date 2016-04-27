import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Grid } from 'react-bootstrap';
import { openItemModal, getItemsIfApplicable, closeItemModal, deleteItem, editItem } from '../actions';
import Item from './Item';
import ItemModal from '../components/ItemModal';
import ItemEditModal from '../components/ItemEditModal';

class ItemsDisplay extends Component {
  render() {
    const {items, selectedItem, user} = this.props;
    const {editItem, deleteItem, getItemsIfApplicable} = this.props;
    const {openEditModal, closeItemModal, itemModal, postStatus} = this.props;
    return <div>
      <ItemModal
        user={user}
        show={itemModal === 'ITEM' ? true : false}
        onHide={closeItemModal}
        item={selectedItem}
        onClickEdit={openEditModal}
      />
      <ItemEditModal
        show={itemModal === 'EDIT' ? true : false}
        postStatus={postStatus}
        closeModal={()=>{
          getItemsIfApplicable();
          closeItemModal();
        }}
      />
      <Grid fluid>
        <Row>
          {_.map(items, (item={}) => {
            if(item) {
              return <Item key={item.id} item={item} />;
            }
          })}
          { _.isEmpty(items) ? <div className="centertxt">No items found.</div> : "" }
        </Row>
      </Grid>
    </div>;
  }
};

const mapStateToProps = (state) => ({
  items: state.items,
  itemModal: state.ui.itemModal,
  selectedItem: state.ui.selectedItem,
  user: state.user,
  postStatus: state.ui.postStatus
});

const mapDispatchToProps = (dispatch) => ({
  openEditModal: () => dispatch(openItemModal('EDIT')),
  closeItemModal: () => dispatch(closeItemModal()), 
  getItemsIfApplicable: () => dispatch(getItemsIfApplicable()),
  deleteItem: (itemId) => dispatch(deleteItem(itemId)),
  editItem: (item) => dispatch(editItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsDisplay);