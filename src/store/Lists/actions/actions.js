import { store } from "../../store";

export function clickOnAddColumnButton() {
  const currentState = store.getState();
  let { addColumnButtonWasClicked } = currentState.listsReducer;

  addColumnButtonWasClicked = true;

  return {
    type: "ON_CLICK_ADD_COLUMN_BUTTON",
    payload: addColumnButtonWasClicked,
  };
}

export function clickOnCloseInputFieldIconColumn() {
  const currentState = store.getState();
  let { addColumnButtonWasClicked } = currentState.listsReducer;

  addColumnButtonWasClicked = false;

  return {
    type: "ON_CLICK_ADD_COLUMN_BUTTON",
    payload: addColumnButtonWasClicked,
  };
}

export function clickOnAddCardButton({ index }) {
  const currentState = store.getState();
  let { lists } = currentState.listsReducer;

  lists.map((el, i) => {
    if (i === index) {
      el.addCardButtonWasClicked = true;
    }
  });

  return {
    type: "ON_CLICK_ADD_CARD_BUTTON",
    payload: lists,
  };
}

export function clickOnCloseInputFieldIconCard({ index }) {
  const currentState = store.getState();
  let { lists } = currentState.listsReducer;

  lists.map((el, i) => {
    if (i === index) {
      el.addCardButtonWasClicked = false;
    }
  });

  return {
    type: "ON_CLICK_ADD_CARD_BUTTON",
    payload: lists,
  };
}
