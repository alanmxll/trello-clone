import { store } from "../../store";

export function addCard() {}

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
