import { store } from "../../store";

export function addCard({ title, index }) {
  const currentState = store.getState();
  let { lists } = currentState.listsReducer;

  const cardToAdd = {
    id: lists[index].cards.length,
    text: title,
  };

  if (title !== "") {
    lists[index].cards.push(cardToAdd);
  }

  return {
    type: "ADD_CARD",
    payload: lists,
  };
}

export function addList({ title }) {
  const currentState = store.getState();
  let { lists } = currentState.listsReducer;

  const listToAdd = {
    title: title,
    id: lists.length,
    cards: [],
  };

  if (title !== "") {
    lists.push(listToAdd);
  }

  return {
    type: "ADD_LIST",
    payload: lists,
  };
}
