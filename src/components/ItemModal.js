import React from 'react';
import _ from 'lodash';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import SignInBox from '../containers/SignInBox';
import config, { numToCategory, decodeText, categoryImage, imgUrl, imgUrls } from '../config';
import EmailButton from './EmailButton';
import ImageCarousel from './ImageCarousel';

const ItemModal = ({ item, show, onHide, user, onClickEdit }) => (
  <Modal show={show} onHide={onHide}>
		<Modal.Header closeButton>
	    <Modal.Title>{decodeText(item.title)}</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
			<Row>
				<Col md={5}>
					<ImageCarousel item={item}/>
				</Col>
				<Col md={7} className="modal-text">
					{decodeText(item.description)}
					<br />
		    	Cost: ${item.cost}
				</Col>
		  </Row>
		  { user.userId == item.owner ?
			  <Button bsStyle="warning"
		      bsSize="small"
		      className="pull-right edit-item-button"
		      onClick={onClickEdit}>
	      	  <span className="glyphicon glyphicon-pencil"/>
	      	  </Button> :
	      	<EmailButton email={item.email}/>
			}
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