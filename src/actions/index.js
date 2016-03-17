import config from '../config';
import _ from 'lodash';
import { startLoading, stopLoading } from './loading';
import { getItemsIfApplicable } from './items';

export * from './loading';
export * from './auth';
export * from './items';
export * from './ui';

export const changeCategory = (id) => {
	return (dispatch, getState) => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      category: id
    });
    dispatch(getItemsIfApplicable());
  };
};

export const setApp = (app) => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_APP',
      app
    });
    dispatch(getItemsIfApplicable());
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