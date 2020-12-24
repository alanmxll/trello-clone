import { useSelector } from "react-redux";

import TrelloAddListButton from "../TrelloAddListButton";
import TrelloInputFieldListName from "../TrelloInputFieldListName";

export default function TrelloAddListComponent() {
  const { addColumnButtonWasClicked } = useSelector((state) => ({
    ...state.listsReducer,
  }));

  return (
    <div>
      {addColumnButtonWasClicked ? (
        <TrelloInputFieldListName />
      ) : (
        <TrelloAddListButton />
      )}
    </div>
  );
}
