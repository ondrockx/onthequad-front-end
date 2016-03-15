const app = (state = {}, action) => {
	switch (action.type) {
    case 'CHANGE_CATEGORY':
      return Object.assign({}, state, {category: action.category});
    case 'CHANGE_USER':
      const { userId, name, email } = action;
      return Object.assign({}, state, {user: {userId, name, email}});
    case 'LOGOUT':
      return Object.assign({}, state, {user: undefined});
		default:
			return state;
	}
};

export default app;