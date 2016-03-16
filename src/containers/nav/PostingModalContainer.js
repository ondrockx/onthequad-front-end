import React from 'react';
import { connect } from 'react-redux';
import { openPostModal, closePostModal } from '../../actions';
import PostingModal from '../../components/PostingModal';

const mapStateToProps = (state) => {
  return {
    show: state.showPostModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHide: () => {
      dispatch(closePostModal());
    }
  };
};

const PostingModalContainer = connect(
  mapStateToProps, mapDispatchToProps
)(PostingModal);

export default PostingModalContainer;