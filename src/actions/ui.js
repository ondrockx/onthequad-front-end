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