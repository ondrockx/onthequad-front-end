import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { deleteItem } from '../actions';
import { decodeText } from '../config';
import ProgressBox from './ProgressBox';

const ModalBody = ({item, closeModal, deleteItem}) => (
	<div>
		<p>Are you sure you want to delete posting:</p>
		<p style={{textAlign: "center"}}>{decodeText(item.title)}</p>
		<Button onClick={closeModal}>Cancel</Button>
		<div className="pull-right">
			<Button bsStyle="danger" onClick={() => deleteItem(item.id)}>Delete</Button>
		</div>
	</div>
);

const ItemEditModal = ({ item, show, deleteItem, closeModal, postStatus }) => (
	<Modal show={show} onHide={closeModal}>
		<Modal.Header closeButton>
	    <Modal.Title>Delete Posting</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
			{postStatus.status ?
				<ProgressBox {...postStatus}/> :
				<ModalBody item={item} closeModal={closeModal} deleteItem={deleteItem}/>}
		</Modal.Body>
	</Modal>
);

ItemEditModal.propTypes = {
	item: PropTypes.object.isRequired,
	show: PropTypes.bool.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default ItemEditModal;