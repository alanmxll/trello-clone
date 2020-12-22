import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { GrTemplate } from "react-icons/gr";

import {
  WrapperTrelloActionButton,
  WrapperAddButton,
  WrapperAddButtonIcon,
  WrapperCreateFromTemplateIconButton,
  ActionButtonText,
  WrapperTextArea,
  AddCardOrColumnTextArea,
  AddCardOrColumnButton,
} from "./style";

export default function TrelloActionButton({ list }) {
  const [wasClicked, setWasClicked] = useState(false);
  const buttonText = list ? "Add another list" : "Add another card";
  const addButtonText = list ? "Add List" : "Add Card";

  function onHandlerAddButton() {
    console.log("Added");
    setWasClicked(true);
  }

  function onHandlerCreateFromTemplate() {
    console.log("Created from template");
  }

  if (wasClicked) {
    return (
      <WrapperTextArea>
        <AddCardOrColumnTextArea />
        <AddCardOrColumnButton>{addButtonText}</AddCardOrColumnButton>
      </WrapperTextArea>
    );
  }

  return (
    <WrapperTrelloActionButton>
      <WrapperAddButton onClick={onHandlerAddButton}>
        <WrapperAddButtonIcon>
          <FiPlus />
        </WrapperAddButtonIcon>
        <ActionButtonText>{buttonText}</ActionButtonText>
      </WrapperAddButton>
      <WrapperCreateFromTemplateIconButton
        onClick={onHandlerCreateFromTemplate}
      >
        <GrTemplate />
      </WrapperCreateFromTemplateIconButton>
    </WrapperTrelloActionButton>
  );
}
