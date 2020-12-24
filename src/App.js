import TrelloTitle from "./components/TrelloTitle";
import TrelloList from "./components/TrelloList";
import TrelloAddListComponent from "./components/TrelloAddListComponent";

import { WrapperGlobal, WrapperLists } from "./styles/global";

export default function App() {
  return (
    <WrapperGlobal>
      <TrelloTitle title={"Trello Clone"} />
      <WrapperLists>
        <TrelloList />
        <TrelloAddListComponent />
      </WrapperLists>
    </WrapperGlobal>
  );
}
