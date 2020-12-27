import React from "react";
import { useDispatch } from "react-redux";
import { clickOnAddCardButton } from "../../store/Lists/actions/actions";

import { FiPlus } from "react-icons/fi";
import { GrTemplate } from "react-icons/gr";

import {
  WrapperAddCardButton,
  WrapperAddButton,
  WrapperCreateFromTemplateButton,
  ActionButtonText,
} from "./style";

export default function TrelloAddCardButton() {
  const dispatchClickOnAddCardButton = useDispatch();

  function onHandleClick() {
    dispatchClickOnAddCardButton(clickOnAddCardButton());
  }

  return (
    <WrapperAddCardButton onClick={onHandleClick}>
      <WrapperAddButton>
        <FiPlus />
        <ActionButtonText>Add another card</ActionButtonText>
      </WrapperAddButton>
      <WrapperCreateFromTemplateButton>
        <GrTemplate />
      </WrapperCreateFromTemplateButton>
    </WrapperAddCardButton>
  );
}
