import React from 'react';
import { connect } from 'react-redux';
import { closePostModal, addPosting } from '../../actions';
import PostingModal from '../../components/PostingModal';

const mapStateToProps = (state) => ({
   show: state.ui.postModal
});

const mapDispatchToProps = (dispatch) => ({
  onHide: () => dispatch(closePostModal()),
  onSubmit: () => dispatch(addPosting())
});

const PostingModalContainer = connect(
  mapStateToProps, mapDispatchToProps
)(PostingModal);

export default PostingModalContainer;