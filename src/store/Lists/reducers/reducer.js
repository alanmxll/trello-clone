import mockList from "../../../mocks/mockLists";

const initialState = {
  lists: mockList,
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
