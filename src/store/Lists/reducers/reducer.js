const initialState = {
  lists: [],
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: action.payload,
      };
    case "ADD_CARD":
      return {
        ...state,
        lists: action.payload,
      };
    case "DRAG_CARD":
      return {
        ...state,
        lists: action.payload,
      };
    default:
      return state;
  }
};

export default listsReducer;
