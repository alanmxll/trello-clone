import React, { useState } from "react";

import { FiPlus } from "react-icons/fi";
import { GrTemplate, GrClose, GrMore } from "react-icons/gr";

import {
  WrapperAddCardButton,
  WrapperAddButton,
  WrapperCreateFromTemplateButton,
  ActionButtonText,
  WrapperInputField,
  TextAreaInputCardName,
  WrapperActionButtons,
  AddCardOnBoardButton,
  WrapperOptionsButton,
} from "./style";

export default function TrelloAddCardComponent() {
  const [addCardIsOpen, setAddCardIsOpen] = useState(false);

  function onHandleClickAddCard() {
    setAddCardIsOpen(true);
  }

  function onHandleClickCloseTextInput() {
    setAddCardIsOpen(false);
  }

  function onHandleClickOptionsButton() {
    console.log("Options button clicked");
  }

  return addCardIsOpen ? (
    <WrapperInputField>
      <TextAreaInputCardName placeholder={"Enter a title for this card..."} />
      <WrapperActionButtons>
        <AddCardOnBoardButton>Add Card</AddCardOnBoardButton>
        <GrClose
          onClick={onHandleClickCloseTextInput}
          style={{ cursor: "pointer" }}
        />
        <WrapperOptionsButton>
          <GrMore
            onClick={onHandleClickOptionsButton}
            style={{ cursor: "pointer" }}
          />
        </WrapperOptionsButton>
      </WrapperActionButtons>
    </WrapperInputField>
  ) : (
    <WrapperAddCardButton>
      <WrapperAddButton onClick={onHandleClickAddCard}>
        <FiPlus />
        <ActionButtonText>Add another card</ActionButtonText>
      </WrapperAddButton>
      <WrapperCreateFromTemplateButton>
        <GrTemplate />
      </WrapperCreateFromTemplateButton>
    </WrapperAddCardButton>
  );
}
