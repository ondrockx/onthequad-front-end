import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import SignInBox from '../containers/SignInBox';
import config, { numToCategory, decodeText, categoryImage, defaultImage } from '../config';
import { Row, Col } from 'react-bootstrap';

const ItemModal = ({ item, show, onHide, user, onClickEdit }) => (
  <Modal show={show} onHide={onHide}>
		<Modal.Header closeButton>
	    <Modal.Title>{decodeText(item.title)}</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
			<Row>
				<Col md={6}>
					<img src={item.url || categoryImage(config.categories[numToCategory(item.category)])} />
				</Col>
				<Col md={6}>
					{decodeText(item.description)}
					<br />
		    	Cost: ${item.cost}
				</Col>
		  </Row>
		  {
		  	user.userId == item.owner ?
			  <Button bsStyle="warning"
		      bsSize="small"
		      className="pull-right edit-item-button"
		      onClick={onClickEdit}>
	      	<span className="glyphicon glyphicon-pencil"/>
	      </Button> :
	      <Button bsStyle="primary"
			  	bsSize="small"
			  	className="pull-right edit-item-button"
			  	href={"mailto:" + item.email +
				  	"?subject=OnTheQuad%20Request%20for%20" + item.title +
				  	"&body=Request%20for%20" + item.title + "(" + item.id + ")"}>
			  	<span className="glyphicon glyphicon-envelope"/>
			  </Button>
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