import React, { PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { decodeText } from '../config';
import ProgressBox from './ProgressBox';
import EditForm from '../containers/EditForm';

const ItemEditModal = ({ show, closeModal, postStatus }) => (
	<Modal show={show} onHide={closeModal}>
		<Modal.Header closeButton>
	    <Modal.Title>Edit Posting</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
			{postStatus.status ?
				<ProgressBox {...postStatus}/> :
				<EditForm closeModal={closeModal} />}
		</Modal.Body>
	</Modal>
);

ItemEditModal.propTypes = {
	show: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	postStatus: PropTypes.object.isRequired
};

export default ItemEditModal;