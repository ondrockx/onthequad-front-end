import config from '../config';
import $ from 'jquery';
import { isSignedIn, startLoading, stopLoading } from '../actions';

export const getItemsIfApplicable = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (!isSignedIn(state) || state.app.gettingItems) {
      return;
    }
    if (state.app.name === 'BROWSE') {
      dispatch(gettingItems());
      dispatch(getItems())
        .done((response) => dispatch(receivedItems(response)))
        .always(() => {
          dispatch(gotItems());
          dispatch(stopLoading());
        });
    }
    if (state.app.name === 'ACCOUNT') {
      dispatch(gettingItems());
      dispatch(getAccountItems())
        .done((response) => dispatch(receivedItems(response)))
        .always(() => {
          dispatch(gotItems());
          dispatch(stopLoading());
        });
    }
    if (state.app.name === 'SEARCH') {
      dispatch(gettingItems());
      dispatch(searchItems())
        .done((response) => dispatch(receivedItems(response)))
        .always(() => {
          dispatch(gotItems());
          dispatch(stopLoading());
        });
    }
  };
};

export const receivedItems = (response) => ({
  type: 'GET_ITEMS',
  num_pages: response.num_pages,
  items: response.data
});

export const gettingItems = () => ({
  type: 'GETTING_ITEMS'
});

export const gotItems = () => ({
  type: 'GOT_ITEMS'
});

export const resetPosting = () => ({
  type: 'POST_ITEM',
  status: 0,
  message: ""
});

export const deleteItem = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    if(!isSignedIn(state)) {
      return;
    }
    dispatch({
      type: 'DELETE_ITEM',
      status: -1,
      message: 'Item Deleting...'
    });
    return $.ajax({
      type: 'DELETE',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/postings?id=' + id,
      success: (responseBody)=>{
        dispatch({
          type: 'DELETE_ITEM',
          status: 1,
          message: 'Item Successfully Deleted'
        });
      },
      error: (XMLHttpRequest, textStatus, errorThrown)=>{
        console.error(textStatus);
        dispatch({
          type: 'DELETE_ITEM',
          status: 2,
          message: 'Item Failed to Delete: ' + textStatus 
        });
      }
    });
  };};

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
      contentType: false,
      processData: false,
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
    param += state.pages.page > 1 ? "&page=" + state.pages.page : "";
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
    param += state.pages.page > 1 ? "&page=" + state.pages.page : "";
    return $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/postings' + param,
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
      }
    });
  };
};

const searchItems = () => {
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
    param += state.pages.page > 1 ? "&page=" + state.pages.page : "";
    param += state.ui.search !== "" ? "&keywords=" + state.ui.search : "";
    return $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/search' + param,
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
      }
    });
  };
};