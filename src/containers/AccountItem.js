import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Thumbnail, Col } from 'react-bootstrap';
import { getItemsIfApplicable, resetPosting, deleteItem } from '../actions';
import config from '../config';
import ProgressBox from '../components/ProgressBox';

class AccountItem extends Component {
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
		const { postStatus, item } = this.props;
		var modalBody = <div>
			<p>Are you sure you want to delete posting:</p>
	  	<p style={{textAlign: "center"}}>{config.decodeText(item.title)}</p>
	  	<Button onClick={this.closeDeleteModal}>Cancel</Button>
	  	<div className="pull-right">
	  		<Button bsStyle="danger" onClick={() => this.props.deleteItem(item.id)}>Delete</Button>
	  	</div>
  	</div>;

  	if (postStatus.status != 0) { // 0 is default
      modalBody = <ProgressBox {...postStatus}/>;
    }

 	  return <Col xs={6} sm={4} md={3}>
	    <Thumbnail src="/images/thumbnaildiv.png" alt="242x200">
	    	<Modal show={this.state.modal} onHide={this.closeDeleteModal}>
					<Modal.Header closeButton>
				    <Modal.Title>Delete Posting</Modal.Title>
				  </Modal.Header>
				  <Modal.Body>
				  	{modalBody}
				  </Modal.Body>
			  </Modal>
	      <Button bsStyle="danger"
	      bsSize="small"
	      className="itemdisplay-button"
	      onClick={this.openDeleteModal}>
	      	<span className="glyphicon glyphicon-remove"/>
	      </Button>
	      <div className="itemdisplay-price">${item.cost.toFixed(2)}</div>
	      <p className="itemdisplay-title">{config.decodeText(item.title)}</p>
	    </Thumbnail>
	  </Col>;
	}
};

AccountItem.propTypes = {
	postStatus: PropTypes.object,
	item: PropTypes.object.isRequired,
	deleteItem: PropTypes.func.isRequired,
	getItemsIfApplicable: PropTypes.func.isRequired,
	resetPosting: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {
		postStatus: state.ui.postStatus
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: (id) => dispatch(deleteItem(id)),
  	getItemsIfApplicable: () => dispatch(getItemsIfApplicable()),
  	resetPosting: () => dispatch(resetPosting())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountItem);