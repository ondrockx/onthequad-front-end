import config from '../config';
import _ from 'lodash';
import { startLoading, stopLoading } from './loading';
import { getItemsIfApplicable } from './items';
import { browseURL, accountURL, searchURL, postingURL } from '../config';
import { setSearch } from './ui';
import queryString from 'query-string';

export * from './loading';
export * from './auth';
export * from './items';
export * from './ui';

export const setCategory = (id) => {
  return {
    type: 'SET_CATEGORY',
    category: id
  };
};

export const setPage = (pageNum) => {
  return {
    type: 'SET_PAGE',
    page: parseInt(pageNum) || 1
  };
};

export const setApp = (app) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_APP',
      app
    });
  };
};

export const navigate = (router, props = {}) => {
  return (dispatch, getState) => {
    const state = getState();
    const app = props.app || state.app.name;
    const category = props.category || state.category;
    const page = props.page;
    const search = props.search || undefined;
    dispatch(setSearch());
    const params = { page, search };
    var query = queryString.stringify(params);
    query = query ? '?' + query : '';
    switch (app) {
      case 'BROWSE':
        router.push(browseURL + '/' + category + query);
        break;
      case 'ACCOUNT':
        router.push(accountURL + query);
        break;
      case 'SEARCH':
        router.push(searchURL + '/' + category + query);
        break;
      case 'POSTING':
        router.push(postingURL + query);
        break;
    }
  };
};

export const isSignedIn = (state) => {
  if (state.user.userId) {
    return true;
  }
  return false;
};

export const testAction = (text = "TEST_ACTION") => {
  return {
    type: text
  };
};

export const testASync = (text) => {
  return (dispatch, getState) => {
    console.log(getState());
    _.delay(() => {
      dispatch(testAction(text));
    }, 1000);
  };
};