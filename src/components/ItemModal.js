import React from 'react';
import { Modal } from 'react-bootstrap';
import SignInBox from '../containers/SignInBox';
import config, { numToCategory, decodeText } from '../config';

const ItemModal = ({ item, show, onHide }) => (
  <Modal show={show} onHide={onHide}>
		<Modal.Header closeButton>
	    <Modal.Title>{decodeText(item.title)}</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
	    {decodeText(item.description)}
	    <br />
	    Cost: {item.cost}
	    <br />
	    Timestamp: {item.timestamp}
	    <br />
	    ID: {item.id}
	    <br />
	    Category: {config.categories[numToCategory(item.category)]}
	  </Modal.Body>
  </Modal>
);

export default ItemModal;