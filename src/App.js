import TrelloTitle from "./components/TrelloTitle";
import TrelloList from "./components/TrelloList";

import { useSelector } from "react-redux";

import { WrapperLists } from "./styles/global";

export default function App() {
  let lists = useSelector((state) => state.listsReducer);

  return (
    <>
      <TrelloTitle title={"Trello Clone"} />
      <WrapperLists>
        {lists.map((list) => {
          return <TrelloList title={list.title} cards={list.cards} />;
        })}
      </WrapperLists>
    </>
  );
}
