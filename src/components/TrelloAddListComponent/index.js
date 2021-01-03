import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../store/Lists/actions/actions";

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
  const dispatchAddList = useDispatch();
  const [addListIsOpen, setAddListIsOpen] = useState(false);
  const [textTyped, setTextTyped] = useState("");

  function onHandleClickAddAnotherList() {
    setAddListIsOpen(true);
  }

  function onHandleClickCloseTextInput() {
    setAddListIsOpen(false);
  }

  function onHandleClickAddList() {
    dispatchAddList(addList({ title: textTyped }));
    setTextTyped("");
    setAddListIsOpen(false);
  }

  return addListIsOpen ? (
    <WrapperInputField>
      <TextAreaInputListName
        placeholder={"Enter list title..."}
        onChange={(event) => setTextTyped(event.target.value)}
      />
      <WrapperActionButtons>
        <AddListOnBoardButton onClick={onHandleClickAddList}>
          Add List
        </AddListOnBoardButton>
        <GrClose
          onClick={onHandleClickCloseTextInput}
          style={{ cursor: "pointer" }}
        />
      </WrapperActionButtons>
    </WrapperInputField>
  ) : (
    <WrapperAddListButton onClick={onHandleClickAddAnotherList}>
      <FiPlus />
      <ActionButtonText>Add another list</ActionButtonText>
    </WrapperAddListButton>
  );
}
