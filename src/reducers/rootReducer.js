const initialState = {
  test: null,
};

const rootReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_MAP_BOUNDS":
      newState.mapBounds = action.val;
      return newState;
    default:
      return newState;
  }
};

export default rootReducer;
