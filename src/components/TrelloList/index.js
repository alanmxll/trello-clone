import React from "react";

import { WrapperTrelloList, TrelloListTitle } from "./style";

import TrelloCard from "../TrelloCard";

export default function TrelloList({ title, cards }) {
  return (
    <WrapperTrelloList>
      <TrelloListTitle>{title}</TrelloListTitle>
      {cards.map((card) => {
        return <TrelloCard text={card.text} />;
      })}
    </WrapperTrelloList>
  );
}
