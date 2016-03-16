const app = (state = {}, action) => {
	switch (action.type) {
    case 'CHANGE_CATEGORY':
      return Object.assign({}, state, {category: action.category});
    case 'CHANGE_USER':
      const { userId, name, email } = action;
      return Object.assign({}, state, {user: {userId, name, email}});
    case 'GET_ITEMS':
      const { items } = action;
      return Object.assign({}, state, {items});
    case 'CLEAR_ITEMS':
      return Object.assign({}, state, {items: undefined});
    case 'OPEN_POST_MODAL':
      return Object.assign({}, state, {showPostModal: true});
    case 'CLOSE_POST_MODAL':
      return Object.assign({}, state, {showPostModal: false});
    case 'LOGOUT':
      return Object.assign({}, state, {user: undefined, items: undefined});
    case 'SET_LOADING':
      return Object.assign({}, state, {loading: state.loading ? state.loading+1 : 1});
    case 'UNSET_LOADING':
      return Object.assign({}, state, {loading: state.loading-1 > 0 ? state.loading-1 : 0});
		default:
			return state;
	}
};

export default app;