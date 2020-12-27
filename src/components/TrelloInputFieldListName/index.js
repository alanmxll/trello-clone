import React from "react";
import { useDispatch } from "react-redux";

import { clickOnCloseInputFieldIconColumn } from "../../store/Lists/actions/actions";

import { GrClose } from "react-icons/gr";
import {
  WrapperInputField,
  TextAreaInputListName,
  WrapperActionButtons,
  AddListOnBoardButton,
} from "./style";

export default function TrelloInputFieldListName() {
  const dispatchClickOnCloseInputFieldIconColumn = useDispatch();

  function onClickClose() {
    dispatchClickOnCloseInputFieldIconColumn(clickOnCloseInputFieldIconColumn());
  }
  return (
    <WrapperInputField>
      <TextAreaInputListName placeholder={"Enter list title..."} />
      <WrapperActionButtons>
        <AddListOnBoardButton>Add List</AddListOnBoardButton>
        <GrClose onClick={onClickClose} style={{ cursor: "pointer" }} />
      </WrapperActionButtons>
    </WrapperInputField>
  );
}
