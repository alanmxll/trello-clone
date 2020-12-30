import React, { useState } from "react";

import { FiPlus } from "react-icons/fi";
import { GrTemplate, GrClose } from "react-icons/gr";

import {
  WrapperAddCardButton,
  WrapperAddButton,
  WrapperCreateFromTemplateButton,
  ActionButtonText,
  WrapperInputField,
  TextAreaInputCardName,
  WrapperActionButtons,
  AddCardOnBoardButton,
} from "./style";

export default function TrelloAddCardComponent() {
  const [addCardIsOpen, setAddCardIsOpen] = useState(false);

  function onHandleClickAddCard() {
    setAddCardIsOpen(true);
  }

  function onHandleClickCloseTextInput() {
    setAddCardIsOpen(false);
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
