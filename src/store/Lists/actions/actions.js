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
