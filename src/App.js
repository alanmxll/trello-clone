import TrelloTitle from "./components/TrelloTitle";
import TrelloList from "./components/TrelloList";
import TrelloAddListButton from "./components/TrelloAddListButton";

import { useSelector } from "react-redux";

import { WrapperGlobal, WrapperLists } from "./styles/global";

export default function App() {
  let lists = useSelector((state) => state.listsReducer);

  return (
    <WrapperGlobal>
      <TrelloTitle title={"Trello Clone"} />
      <WrapperLists>
        {lists.map((list) => {
          return (
            <TrelloList key={list.id} title={list.title} cards={list.cards} />
          );
        })}
        <TrelloAddListButton />
      </WrapperLists>
    </WrapperGlobal>
  );
}
