import React from "react";
import { FiPlus } from "react-icons/fi";

import { WrapperAddListButton, ActionButtonText } from "./style";

export default function TrelloAddListButton() {
  return (
    <WrapperAddListButton>
      <FiPlus />
      <ActionButtonText>Add another list</ActionButtonText>
    </WrapperAddListButton>
  );
}
