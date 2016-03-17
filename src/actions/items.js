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
      dispatch(getItems()).done((response) => dispatch({
          type: 'GET_ITEMS',
          items: response.data
        })).always(() => {
          dispatch(gotItems());
          dispatch(stopLoading());
        });
    }
    if (state.category === 'Account'
      && isSignedIn(state)
      && !state.app.gettingItems) {
      dispatch(gettingItems());
      dispatch(getAccountItems()).done((response) => dispatch({
          type: 'GET_ITEMS',
          items: response.data
        })).always(() => {
          dispatch(gotItems());
          dispatch(stopLoading());
        });
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

const getAccountItems = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (!isSignedIn(state)) {
      return;
    }
    dispatch(startLoading());
    const { userId } = state.user;
    var param = "?owner=" + userId;
    param += "&sort=" + state.ui.filter.sort;
    return $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/postings/' + param,
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
      }
    });
  };
};

const getItems = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (!isSignedIn(state)) {
      return;
    }
    dispatch(startLoading());
    const category = state.category;
    const catNum = config.categoryToNum(category);
    var param = "?sort=" + state.ui.filter.sort;
    param += catNum > 0 ? "&category=" + catNum : "";
    return $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/postings/' + param,
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
      }
    });
  };
};