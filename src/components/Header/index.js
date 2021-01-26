import React from "react";

import { Container } from "./styles";

import TrelloLogo from "../../assets/images/trello-logo.png";

export default function Header() {
  return (
    <Container>
      <img src={TrelloLogo} alt="logo" height={30}/>
    </Container>
  );
}
