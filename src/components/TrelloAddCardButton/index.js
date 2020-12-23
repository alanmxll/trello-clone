import React from "react";
import { FiPlus } from "react-icons/fi";
import { GrTemplate } from "react-icons/gr";

import {
  WrapperAddCardButton,
  WrapperAddButton,
  WrapperCreateFromTemplateButton,
  ActionButtonText,
} from "./style";

export default function TrelloAddCardButton() {
  return (
    <WrapperAddCardButton>
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
