// Initial State
export const initialState = {
	user: null,
};

// Action Types for Dispatch()
export const actionTypes = {
	SET_USER: "SET_USER",
};

// Reducer, Actions
const reducer = (state, action) => {
	// console.log(action);
	switch (action.type) {
		case actionTypes.SET_USER:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};

export default reducer;
