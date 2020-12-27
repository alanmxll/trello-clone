import React from "react";
import { useSelector } from "react-redux";

import { WrapperTrelloList, TrelloListTitle } from "./style";
import { WrapperLists } from "../../styles/global";

import TrelloCard from "../TrelloCard";
import TrelloAddCardComponent from "../TrelloAddCardComponent";

export default function TrelloList() {
  let { lists } = useSelector((state) => ({
    ...state.listsReducer,
  }));

  return (
    <WrapperLists>
      {lists.map((list) => {
        return (
          <WrapperTrelloList>
            <TrelloListTitle>{list.title}</TrelloListTitle>
            {list.cards.map((card) => {
              return <TrelloCard key={card.id} text={card.text} />;
            })}
            <TrelloAddCardComponent />
          </WrapperTrelloList>
        );
      })}
    </WrapperLists>
  );
}
