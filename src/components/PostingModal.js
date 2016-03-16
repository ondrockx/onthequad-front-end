import React from 'react';
import { Modal } from 'react-bootstrap';
import PostingForm from './PostingForm';

const PostingModal = ({ show, onHide, onSubmit }) => (
  <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>New Posting</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <PostingForm onClick={onSubmit}/>
    </Modal.Body>
  </Modal>
);

export default PostingModal;