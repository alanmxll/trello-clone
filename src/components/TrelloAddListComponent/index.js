import React, { useState } from "react";

import { FiPlus } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import {
  WrapperAddListButton,
  ActionButtonText,
  WrapperInputField,
  TextAreaInputListName,
  WrapperActionButtons,
  AddListOnBoardButton,
} from "./style";

export default function TrelloAddListComponent() {
  const [addListIsOpen, setAddListIsOpen] = useState(false);

  function onHandleClickAddList() {
    setAddListIsOpen(true);
  }

  function onHandleClickCloseTextInput() {
    setAddListIsOpen(false);
  }

  return addListIsOpen ? (
    <WrapperInputField>
      <TextAreaInputListName placeholder={"Enter list title..."} />
      <WrapperActionButtons>
        <AddListOnBoardButton>Add List</AddListOnBoardButton>
        <GrClose
          onClick={onHandleClickCloseTextInput}
          style={{ cursor: "pointer" }}
        />
      </WrapperActionButtons>
    </WrapperInputField>
  ) : (
    <WrapperAddListButton onClick={onHandleClickAddList}>
      <FiPlus />
      <ActionButtonText>Add another list</ActionButtonText>
    </WrapperAddListButton>
  );
}
