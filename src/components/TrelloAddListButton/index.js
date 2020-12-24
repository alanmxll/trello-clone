import React from "react";
import { useDispatch } from "react-redux";
import { clickOnAddColumnButton } from "../../store/Lists/actions/actions";

import { FiPlus } from "react-icons/fi";
import { WrapperAddListButton, ActionButtonText } from "./style";

export default function TrelloAddListButton() {
  const dispatchClickOnAddColumnButton = useDispatch();

  function onHandleClick() {
    dispatchClickOnAddColumnButton(clickOnAddColumnButton());
  }

  return (
    <WrapperAddListButton onClick={onHandleClick}>
      <FiPlus />
      <ActionButtonText>Add another list</ActionButtonText>
    </WrapperAddListButton>
  );
}
