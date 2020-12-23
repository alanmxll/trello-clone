import React from "react";

import { WrapperTrelloList, TrelloListTitle } from "./style";

import TrelloCard from "../TrelloCard";
import TrelloAddCardButton from "../TrelloAddCardButton";

export default function TrelloList({ title, cards }) {
  return (
    <WrapperTrelloList>
      <TrelloListTitle>{title}</TrelloListTitle>
      {cards.map((card) => {
        return <TrelloCard key={card.id} text={card.text} />;
      })}
      <TrelloAddCardButton />
    </WrapperTrelloList>
  );
}
