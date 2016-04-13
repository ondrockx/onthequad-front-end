import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Thumbnail, Col } from 'react-bootstrap';
import { getItemsIfApplicable, resetPosting, deleteItem } from '../actions';
import config, { decodeText } from '../config';
import ProgressBox from '../components/ProgressBox';

class Item extends Component {
	constructor(props) {
		super(props);
		this.openDeleteModal = this.openDeleteModal.bind(this);
		this.closeDeleteModal = this.closeDeleteModal.bind(this);
	}

	componentWillMount() {
		this.setState({modal: false});
	}

	openDeleteModal() {
		this.setState({modal: true});
	}

	closeDeleteModal() {
		this.setState({modal: false});
		this.props.getItemsIfApplicable();
		this.props.resetPosting();
	}

	render() {
		const { postStatus, item, onClickItem, user } = this.props;
		var removeButton;
		var modalBody = <div>
			<p>Are you sure you want to delete posting:</p>
	  	<p style={{textAlign: "center"}}>{decodeText(item.title)}</p>
	  	<Button onClick={this.closeDeleteModal}>Cancel</Button>
	  	<div className="pull-right">
	  		<Button bsStyle="danger" onClick={() => this.props.deleteItem(item.id)}>Delete</Button>
	  	</div>
  	</div>;

  	if (postStatus.status != 0) { // 0 is default
      modalBody = <ProgressBox {...postStatus}/>;
    }

    if (user.userId == item.owner) {
    	removeButton = <Button bsStyle="warning"
	      bsSize="small"
	      className="itemdisplay-button"
	      onClick={(e) => {
						e.stopPropagation();
		      	this.openDeleteModal();
		      }}>
	      	<span className="glyphicon glyphicon-pencil"/>
	      </Button>;
    }

 	  return <Col xs={6} sm={4} md={3}>
	    <Thumbnail src="/images/thumbnaildiv.png" alt="242x200" onClick={() => onClickItem(item)}>
	    	<Modal show={this.state.modal} onHide={this.closeDeleteModal}>
					<Modal.Header closeButton>
				    <Modal.Title>Delete Posting</Modal.Title>
				  </Modal.Header>
				  <Modal.Body>
				  	{modalBody}
				  </Modal.Body>
			  </Modal>
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