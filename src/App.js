import TrelloTitle from "./components/TrelloTitle";
import TrelloList from "./components/TrelloList";
import TrelloAddListComponent from "./components/TrelloAddListComponent";

import { WrapperGlobal, WrapperLists } from "./styles/global";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  function onDragEnd(result) {
    // TODO
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
    </DragDropContext>
  );
}
