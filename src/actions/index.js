import config from '../config';
import _ from 'underscore';
export { login, logout, startGAuth } from './auth';

export const changeCategory = (id) => {
	return {
		type: 'CHANGE_CATEGORY',
		category: id
	};
};

const testAction = (text) => {
  return {
    type: text
  };
};

const testASync = (text = "TEST_ACTION") => {
  return (dispatch, getState) => {
    _.delay(() => {
      dispatch(testAction(text));
    }, 1000);
  };
};