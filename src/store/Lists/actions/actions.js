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

export function dragCard({ result }) {
  const currentState = store.getState();
  let { lists } = currentState.listsReducer;

  if (!result.destination) return;

  const [reorderedList] = lists[result.source.droppableId].cards.splice(
    result.source.index,
    1
  );
  lists[result.source.droppableId].cards.splice(
    result.destination.index,
    0,
    reorderedList
  );

  console.log(result);

  return {
    type: "DRAG_CARD",
    payload: lists,
  };
}
