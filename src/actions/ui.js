import { getItemsIfApplicable, resetPosting } from '../actions';

export const openPostModal = () => {
  return (dispatch, getState) => {
    dispatch(resetPosting());
    dispatch({
      type: 'OPEN_POST_MODAL'
    });
  };
};

export const closePostModal = () => {
  return (dispatch, getState) => {
  	dispatch({
    	type: 'CLOSE_POST_MODAL'
  	});
  	dispatch(getItemsIfApplicable());
  };
};

export const openItemModal = (view) => {
  return (dispatch, getState) => {
    dispatch(resetPosting());
    dispatch({
      type: 'OPEN_ITEM_MODAL',
      view
    });
  };
};

export const closeItemModal = () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'CLOSE_ITEM_MODAL'
    });
  };
};

export const sortBy = (sort) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_SORT',
      sort
    });
    dispatch(getItemsIfApplicable());
  };
};

export const setSearch = (search) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SEARCH',
      search
    });
  };
};