export const startLoading = () => {
	return {
		type: 'SET_LOADING'
	};
};

export const stopLoading = () => {
	return {
		type: 'UNSET_LOADING'
	};
};