import { getItemsIfApplicable, resetPosting } from '../actions';

export const openPostModal = () => {
  return {
    type: 'OPEN_POST_MODAL'
  };
};

export const closePostModal = () => {
  return (dispatch, getState) => {
  	dispatch({
    	type: 'CLOSE_POST_MODAL'
  	});
  	dispatch(getItemsIfApplicable());
  	dispatch(resetPosting());
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