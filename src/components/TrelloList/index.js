import React from "react";

import { WrapperTrelloList, TrelloListTitle } from "./style";

import TrelloCard from "../TrelloCard";
import TrelloActionButton from "../TrelloActionButton";

export default function TrelloList({ title, cards }) {
  return (
    <WrapperTrelloList>
      <TrelloListTitle>{title}</TrelloListTitle>
      {cards.map((card) => {
        return <TrelloCard key={card.id} text={card.text} />;
      })}
      <TrelloActionButton />
    </WrapperTrelloList>
  );
}
