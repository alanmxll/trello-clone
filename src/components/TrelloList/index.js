import React from "react";

import { WrapperTrelloList, TrelloListTitle } from "./style";

export default function TrelloList({ title }) {
  return (
    <WrapperTrelloList>
      <TrelloListTitle>{title}</TrelloListTitle>
    </WrapperTrelloList>
  );
}
