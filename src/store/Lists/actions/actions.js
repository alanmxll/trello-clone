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

export function clickOnAddCardButton() {
  const currentState = store.getState();
  let { addCardButtonWasClicked } = currentState.listsReducer;

  addCardButtonWasClicked = true;

  return {
    type: "ON_CLICK_ADD_CARD_BUTTON",
    payload: addCardButtonWasClicked,
  };
}

export function clickOnCloseInputFieldIconCard() {
  const currentState = store.getState();
  let { addCardButtonWasClicked } = currentState.listsReducer;

  addCardButtonWasClicked = false;

  return {
    type: "ON_CLICK_ADD_CARD_BUTTON",
    payload: addCardButtonWasClicked,
  };
}
