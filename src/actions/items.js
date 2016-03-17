import config from '../config';
import $ from 'jquery';
import { isSignedIn, startLoading, stopLoading } from '../actions';

export const getItemsIfApplicable = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (config.categories[state.category]
      && isSignedIn(state)
      && !state.app.gettingItems) {
      dispatch(gettingItems());
      dispatch(getItems(gotItems));
    }
    if (state.category === 'Account'
      && isSignedIn(state)
      && !state.app.gettingItems) {
      dispatch(gettingItems());
      dispatch(getAccountItems(gotItems));
    }
  };
};

export const gettingItems = () => {
  return {
    type: 'GETTING_ITEMS'
  };
};

export const gotItems = () => {
  return {
    type: 'GOT_ITEMS'
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

const getAccountItems = (callback) => {
  return (dispatch, getState) => {
    const state = getState();
    if (!isSignedIn(state)) {
      return;
    }
    dispatch(startLoading());
    const { userId } = state.user;
    const param = "?owner=" + userId;
    return $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/postings/' + param,
      success: (response) => {
        dispatch({
          type: 'GET_ITEMS',
          items: response.data
        });
        dispatch(callback());
        dispatch(stopLoading());
      },
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
        dispatch(stopLoading());
      }
    });
  };
};

const getItems = (callback) => {
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
        dispatch(callback());
        dispatch(stopLoading());
      },
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
        dispatch(stopLoading());
      }
    });
  };
};