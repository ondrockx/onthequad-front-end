import config from '../config';
import _ from 'lodash';
import { startLoading, stopLoading } from './loading';
import { getItemsIfApplicable } from './items';

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