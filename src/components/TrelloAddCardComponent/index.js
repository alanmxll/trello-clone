import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../store/Lists/actions/actions";

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

export default function TrelloAddCardComponent({ index }) {
  const dispatchAddCard = useDispatch();
  const [addCardIsOpen, setAddCardIsOpen] = useState(false);
  const [textTyped, setTextTyped] = useState("");

  function onHandleClickAddAnotherCard() {
    setAddCardIsOpen(true);
  }

  function onHandleClickCloseTextInput() {
    setAddCardIsOpen(false);
  }

  function onHandleClickOptionsButton() {
    console.log("Options button clicked");
  }

  function onHandleClickAddCard() {
    dispatchAddCard(addCard({ title: textTyped, index: index }));
    setTextTyped("");
    setAddCardIsOpen(false);
  }

  return addCardIsOpen ? (
    <WrapperInputField>
      <TextAreaInputCardName
        placeholder={"Enter a title for this card..."}
        onChange={(event) => setTextTyped(event.target.value)}
      />
      <WrapperActionButtons>
        <AddCardOnBoardButton
          onClick={() => {
            onHandleClickAddCard();
          }}
        >
          Add Card
        </AddCardOnBoardButton>
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
      <WrapperAddButton onClick={onHandleClickAddAnotherCard}>
        <FiPlus />
        <ActionButtonText>Add another card</ActionButtonText>
      </WrapperAddButton>
      <WrapperCreateFromTemplateButton>
        <GrTemplate />
      </WrapperCreateFromTemplateButton>
    </WrapperAddCardButton>
  );
}
