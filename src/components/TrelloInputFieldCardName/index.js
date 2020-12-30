import React from "react";
import { useDispatch } from "react-redux";

import { clickOnCloseInputFieldIconCard } from "../../store/Lists/actions/actions";

import { GrClose } from "react-icons/gr";
import {
  WrapperInputField,
  TextAreaInputCardName,
  WrapperActionButtons,
  AddCardOnBoardButton,
} from "./style";

export default function TrelloInputFieldCardName({ index }) {
  const dispatchClickOnCloseInputFieldIconCard = useDispatch();

  function onClickClose() {
    dispatchClickOnCloseInputFieldIconCard(
      clickOnCloseInputFieldIconCard({ index })
    );
  }

  return (
    <WrapperInputField>
      <TextAreaInputCardName placeholder={"Enter a title for this card..."} />
      <WrapperActionButtons>
        <AddCardOnBoardButton>Add Card</AddCardOnBoardButton>
        <GrClose onClick={onClickClose} style={{ cursor: "pointer" }} />
      </WrapperActionButtons>
    </WrapperInputField>
  );
}
