import React from "react";

import { WrapperTrelloList, TrelloListTitle } from "./style";

import TrelloCard from "../TrelloCard";

export default function TrelloList({ title }) {
  return (
    <WrapperTrelloList>
      <TrelloListTitle>{title}</TrelloListTitle>
      <TrelloCard></TrelloCard>
    </WrapperTrelloList>
  );
}
