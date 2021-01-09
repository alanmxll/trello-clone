import React from "react";
import { useDispatch } from "react-redux";
import { dragCard } from "./store/Lists/actions/actions";

import TrelloTitle from "./components/TrelloTitle";
import TrelloList from "./components/TrelloList";
import TrelloAddListComponent from "./components/TrelloAddListComponent";

import { WrapperGlobal, WrapperLists, GlobalStyle } from "./styles/global";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const dispatchDragCard = useDispatch();

  function onDragEnd(result) {
    dispatchDragCard(dragCard({ result }));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <WrapperGlobal>
        <TrelloTitle title={"Trello Clone"} />
        <WrapperLists>
          <TrelloList />
          <TrelloAddListComponent />
        </WrapperLists>
      </WrapperGlobal>

      <GlobalStyle />
    </DragDropContext>
  );
}
