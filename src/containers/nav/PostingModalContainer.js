import React from 'react';
import { connect } from 'react-redux';
import { closePostModal } from '../../actions';
import PostingModal from '../../components/PostingModal';

const mapStateToProps = (state) => ({
   show: state.ui.postModal
});

const mapDispatchToProps = (dispatch) => ({
  onHide: () => dispatch(closePostModal())
});

const PostingModalContainer = connect(
  mapStateToProps, mapDispatchToProps
)(PostingModal);

export default PostingModalContainer;