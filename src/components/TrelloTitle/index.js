import React from "react";

import { WrapperTrelloTitle, TextTitle } from "./style";

export default function TrelloTitle({ title }) {
  return (
    <WrapperTrelloTitle>
      <TextTitle>{title}</TextTitle>
    </WrapperTrelloTitle>
  );
}
