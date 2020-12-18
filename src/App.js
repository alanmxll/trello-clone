import TrelloTitle from "./components/TrelloTitle";
import TrelloList from "./components/TrelloList";

export default function App() {
  return (
    <div className="App">
      <TrelloTitle title={"Trello Clone"} />
      <TrelloList title={"Column name"} />
    </div>
  );
}
