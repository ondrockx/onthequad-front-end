import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Thumbnail, Col } from 'react-bootstrap';
import { setSelectedItem, openItemModal } from '../actions';
import config, { decodeText } from '../config';

class Item extends Component {
	render() {
		const { item, onClickItem, onClickEdit, user } = this.props;
		var removeButton;
    if (user.userId == item.owner) {
    	removeButton = <Button bsStyle="warning"
	      bsSize="small"
	      className="itemdisplay-button"
	      onClick={(e) => {
						e.stopPropagation();
		      	onClickEdit(item);
		      }}>
	      	<span className="glyphicon glyphicon-pencil"/>
	      </Button>;
    }
 	  return <Col xs={6} sm={4} md={3}>
	    <Thumbnail src="/images/thumbnaildiv.png" alt="242x200" onClick={() => onClickItem(item)}>
	      {removeButton}
	      <div className="itemdisplay-price">${item.cost.toFixed(2)}</div>
	      <p className="itemdisplay-title">{decodeText(item.title)}</p>
	    </Thumbnail>
	  </Col>;
	}
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
	onClickItem: PropTypes.func.isRequired,
	onClickEdit: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => ({
  onClickItem: (item) => {
    dispatch(setSelectedItem(item));
    dispatch(openItemModal('ITEM'));
  },
  onClickEdit: (item) => {
    dispatch(setSelectedItem(item));
    dispatch(openItemModal('EDIT'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);