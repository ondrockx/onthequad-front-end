import React from 'react';
import { Modal } from 'react-bootstrap';
import PostingForm from '../containers/PostingForm';
import SignInBox from '../containers/SignInBox';

const PostingModal = ({ show, onHide }) => (
  <Modal show={show} onHide={onHide}>
		<Modal.Header closeButton>
	    <Modal.Title>New Posting</Modal.Title>
	  </Modal.Header>
	  <Modal.Body>
	    <SignInBox>
	    	<PostingForm/>
	    </SignInBox>
	  </Modal.Body>
  </Modal>
);

export default PostingModal;