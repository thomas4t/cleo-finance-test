const initialState = {
  searchResults: null,
};

const rootReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      newState.searchResults = action.val;
      return newState;
    default:
      return newState;
  }
};

export default rootReducer;
