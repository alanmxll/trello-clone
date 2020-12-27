import { useSelector } from "react-redux";

import TrelloAddCardButton from "../TrelloAddCardButton";
import TrelloInputFieldCardName from "../TrelloInputFieldCardName";

export default function TrelloAddCardComponent() {
  const { addCardButtonWasClicked } = useSelector((state) => ({
    ...state.listsReducer,
  }));
  return (
    <div>
      {addCardButtonWasClicked ? (
        <TrelloInputFieldCardName />
      ) : (
        <TrelloAddCardButton />
      )}
    </div>
  );
}
