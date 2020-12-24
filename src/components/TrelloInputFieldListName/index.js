import React from "react";
import { useDispatch } from "react-redux";

import { clickOnCloseInputFieldIcon } from "../../store/Lists/actions/actions";

import { GrClose } from "react-icons/gr";
import {
  WrapperInputField,
  TextAreaInputListName,
  WrapperActionButtons,
  AddListOnBoardButton,
} from "./style";

export default function TrelloInputFieldListName() {
  const dispatchClickOnCloseInputFieldIcon = useDispatch();

  function onClickClose() {
    dispatchClickOnCloseInputFieldIcon(clickOnCloseInputFieldIcon());
  }
  return (
    <WrapperInputField>
      <TextAreaInputListName placeholder={"Enter list title..."} />
      <WrapperActionButtons>
        <AddListOnBoardButton>Add List</AddListOnBoardButton>
        <GrClose onClick={onClickClose} />
      </WrapperActionButtons>
    </WrapperInputField>
  );
}
