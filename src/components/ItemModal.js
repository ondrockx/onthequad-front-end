import React from 'react';
import { Modal } from 'react-bootstrap';
import SignInBox from '../containers/SignInBox';
import config, { numToCategory, decodeText, defaultImage } from '../config';
import { Row, Col } from 'react-bootstrap';

const ItemModal = ({ item, show, onHide }) => (
  <Modal show={show} onHide={onHide}>
		<Modal.Header closeButton>
	    <Modal.Title>{decodeText(item.title)}</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
			<Row>
				<Col md={6}>
					<img src={ item.url || defaultImage } alt="242x200" />
				</Col>
				<Col md={6}>
					{decodeText(item.description)}
					<br />
		    	Cost: ${item.cost}
				</Col>
		  </Row>
	  </Modal.Body>
	  <Modal.Footer>
	    <div className="pull-left">
	    	ID: {item.id} | Category: {config.categories[numToCategory(item.category)]}
	    </div>
	    <div className="pull-right">Last Updated: {item.timestamp}</div>
	  </Modal.Footer>
  </Modal>
);

export default ItemModal;