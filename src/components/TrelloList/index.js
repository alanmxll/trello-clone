import React from "react";
import { useSelector } from "react-redux";

import { WrapperTrelloList, TrelloListTitle } from "./style";
import { WrapperLists } from "../../styles/global";

import TrelloCard from "../TrelloCard";
import TrelloAddCardComponent from "../TrelloAddCardComponent";
import { Droppable } from "react-beautiful-dnd";

export default function TrelloList() {
  let { lists } = useSelector((state) => ({
    ...state.listsReducer,
  }));

  return (
    <WrapperLists>
      {lists.map((list, index) => {
        return (
          <Droppable droppableId={`droppable-${list.id}`} key={list.id}>
            {(provided) => [
              <WrapperTrelloList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <TrelloListTitle>{list.title}</TrelloListTitle>
                {list.cards.map((card, index) => {
                  return (
                    <TrelloCard key={card.id} text={card.text} index={index} />
                  );
                })}
                {provided.placeholder}
                <TrelloAddCardComponent index={index} />
              </WrapperTrelloList>,
            ]}
          </Droppable>
        );
      })}
    </WrapperLists>
  );
}
