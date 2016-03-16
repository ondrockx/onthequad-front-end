import config from '../config';
import _ from 'underscore';
import { startLoading, stopLoading } from './loading';

export { startLoading, stopLoading } from './loading';
export { login, logout, startGAuth } from './auth';

export const changeCategory = (id) => {
	return {
		type: 'CHANGE_CATEGORY',
		category: id
	};
};

export const getItems = (category) => {
  return (dispatch, getState) => {
    category = category || getState().category;
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
      },
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
      }
    });
  };
};

export const openPostModal = () => {
  return {
    type: 'OPEN_POST_MODAL'
  };
};

export const closePostModal = () => {
  return {
    type: 'CLOSE_POST_MODAL'
  };
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