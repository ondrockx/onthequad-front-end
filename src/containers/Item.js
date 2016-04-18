import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Thumbnail, Col } from 'react-bootstrap';
import { getItemsIfApplicable, resetPosting, deleteItem } from '../actions';
import config, { decodeText } from '../config';
import ItemEditModal from '../components/ItemEditModal';

class Item extends Component {
	componentWillMount() {
		this.setState({modal: false});
	}

	render() {
		const { postStatus, item, onClickItem, user, deleteItem } = this.props;
		var removeButton;
    if (user.userId == item.owner) {
    	removeButton = <Button bsStyle="warning"
	      bsSize="small"
	      className="itemdisplay-button"
	      onClick={(e) => {
						e.stopPropagation();
		      	this.setState({modal: true});
		      }}>
	      	<span className="glyphicon glyphicon-pencil"/>
	      </Button>;
    }
		// TODO: Move ItemEditModal to be a single instance that loads the information from
		// the 'selected' item.
 	  return <Col xs={6} sm={4} md={3}>
	    <Thumbnail src="/images/thumbnaildiv.png" alt="242x200" onClick={() => onClickItem(item)}>
	    	<ItemEditModal
					item={item}
					user={user}
					show={this.state.modal}
					deleteItem={deleteItem}
					closeModal={()=>{
						this.setState({modal: false});
						this.props.getItemsIfApplicable();
						this.props.resetPosting();
					}}
					postStatus={postStatus}
				/>
	      {removeButton}
	      <div className="itemdisplay-price">${item.cost.toFixed(2)}</div>
	      <p className="itemdisplay-title">{decodeText(item.title)}</p>
	    </Thumbnail>
	  </Col>;
	}
};

Item.propTypes = {
	postStatus: PropTypes.object,
	item: PropTypes.object.isRequired,
	deleteItem: PropTypes.func.isRequired,
	getItemsIfApplicable: PropTypes.func.isRequired,
	resetPosting: PropTypes.func.isRequired,
	onClickItem: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		postStatus: state.ui.postStatus,
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: (id) => dispatch(deleteItem(id)),
  	getItemsIfApplicable: () => dispatch(getItemsIfApplicable()),
  	resetPosting: () => dispatch(resetPosting())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);