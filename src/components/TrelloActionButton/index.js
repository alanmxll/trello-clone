import React from "react";
import { FiPlus } from "react-icons/fi";
import { GrTemplate } from "react-icons/gr";

import {
  WrapperTrelloActionButton,
  WrapperAddButton,
  WrapperAddButtonIcon,
  WrapperCreateFromTemplateIconButton,
  ActionButtonText,
} from "./style";

export default function TrelloActionButton({ list }) {
  const buttonText = list ? "Add another list" : "Add another card";

  function onHandlerAddButton() {
    console.log("Added");
  }

  function onHandlerCreateFromTemplate() {
    console.log("Created from template");
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
