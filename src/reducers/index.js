import { combineReducers } from 'redux';
import ui from './ui';

const category = (state = "", action) => {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return action.category;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_USER':
      const { userId, name, email } = action;
      return { userId, name, email };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.items;
    case 'CLEAR_ITEMS':
      return [];
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

const app = (state = {}, action) => {
  switch (action.type) {
    case 'SET_APP':
      return Object.assign({}, state, {name: action.app});
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  category,
  items,
  user,
  ui,
  app
});

export default mainReducer;