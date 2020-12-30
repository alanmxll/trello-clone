const initialState = {
  addColumnButtonWasClicked: false,
  lists: [
    {
      title: "Study",
      id: 0,
      addCardButtonWasClicked: false,
      cards: [
        {
          id: 0,
          text: "Learn ReactJS and Redux",
        },
        {
          id: 1,
          text: "Studying ReactJS building a Trello Clone",
        },
      ],
    },
    {
      title: "Recreation",
      id: 1,
      addCardButtonWasClicked: false,
      cards: [
        {
          id: 0,
          text: "Practice physical exercises",
        },
        {
          id: 1,
          text: "Read a book",
        },
        {
          id: 2,
          text: "Play World Of Warcraft",
        },
      ],
    },
  ],
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_CLICK_ADD_COLUMN_BUTTON":
      return {
        ...state,
        addColumnButtonWasClicked: action.payload,
      };
    case "ON_CLICK_ADD_CARD_BUTTON":
      return {
        ...state,
        lists: action.payload,
      };
    default:
      return state;
  }
};

export default listsReducer;
