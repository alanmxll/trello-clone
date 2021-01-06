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
          <Droppable
            droppableId={`${list.id}`}
            key={`list-${list.id}`}
          >
            {(provided) => [
              <WrapperTrelloList
                key={`wrapperlist-${list.id}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <TrelloListTitle key={`list-${list.id}`}>
                  {list.title}
                </TrelloListTitle>
                {list.cards.map((card, index) => {
                  return (
                    <TrelloCard
                      key={`list-${list.id}-card-${card.id}`}
                      text={card.text}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
                <TrelloAddCardComponent
                  key={`addlist-${list.id}`}
                  index={index}
                />
              </WrapperTrelloList>,
            ]}
          </Droppable>
        );
      })}
    </WrapperLists>
  );
}
