import mockList from "../../../mocks/mockLists";

const initialState = {
  lists: mockList,
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists: action.payload,
      };
    default:
      return state;
  }
};

export default listsReducer;
