
// Define a reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SERVER_OBJECT:
        return { ...state, serverObject: action.payload };
      default:
        return state;
    }
  };