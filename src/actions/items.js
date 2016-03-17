import config from '../config';
import $ from 'jquery';
import { isSignedIn, startLoading, stopLoading } from '../actions';

export const getItemsIfApplicable = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.app.name == 'BROWSE'
      && isSignedIn(state)) {
      dispatch(getItems());
    }
  };
};

export const resetPosting = () => {
  return {
    type: 'POST_ITEM',
    status: 0,
    message: ""
  };
};

export const addPosting = (payload) => {
  return (dispatch, getState) => {
    const state = getState();
    if(!isSignedIn(state)) {
      return;
    }
    dispatch({
      type: 'POST_ITEM',
      status: -1,
      message: 'Item Posting...'
    });
    return $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/postings/',
      data: payload,
      success: (responseBody)=>{
        dispatch({
          type: 'POST_ITEM',
          status: 1,
          message: 'Item Successfully Posted!'
        });
      },
      error: (XMLHttpRequest, textStatus, errorThrown)=>{
        console.error(textStatus);
        dispatch({
          type: 'POST_ITEM',
          status: 2,
          message: 'Item Failed to Post: ' + textStatus 
        });
      }
    });
  };
};

export const getItems = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (!isSignedIn(state)) {
      return;
    }
    dispatch(startLoading());
    const category = state.category;
    const catNum = config.categoryToNum(category);
    const catParam = catNum > 0 ? "?category=" + catNum : "";
    return $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/postings/' + catParam,
      success: (response) => {
        dispatch({
          type: 'GET_ITEMS',
          items: response.data
        });
        dispatch(stopLoading());
      },
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
        dispatch(stopLoading());
      }
    });
  };
};