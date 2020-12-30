import React from "react";
import { useSelector } from "react-redux";

import { WrapperTrelloList, TrelloListTitle } from "./style";
import { WrapperLists } from "../../styles/global";

import TrelloCard from "../TrelloCard";
import TrelloAddCardButton from "../TrelloAddCardButton";
import TrelloInputFieldCardName from "../TrelloInputFieldCardName";

export default function TrelloList() {
  let { lists } = useSelector((state) => ({
    ...state.listsReducer,
  }));

  return (
    <WrapperLists>
      {lists.map((list, index) => {
        return (
          <WrapperTrelloList key={list.id}>
            <TrelloListTitle>{list.title}</TrelloListTitle>
            {list.cards.map((card) => {
              return <TrelloCard key={card.id} text={card.text} />;
            })}
            {list.addCardButtonWasClicked ? (
              <TrelloInputFieldCardName index={index} />
            ) : (
              <TrelloAddCardButton index={index} />
            )}
          </WrapperTrelloList>
        );
      })}
    </WrapperLists>
  );
}
