const initialState = {
  lists: [
    {
      title: "Study",
      id: 0,
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
    default:
      return state;
  }
};

export default listsReducer;
