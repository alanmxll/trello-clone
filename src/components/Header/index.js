import React from "react";

import { Container } from "./styles";

import { CgMenuGridO } from "react-icons/cg";

import TrelloLogo from "../../assets/images/trello-logo.png";

export default function Header() {
  return (
    <Container>
      <div className="menu-buttons">
        <div className="main-menu">
          <CgMenuGridO size={24} color={"fff"} />
        </div>
      </div>
      <img src={TrelloLogo} alt="logo" height={30} />
      <div className="setting-buttons"></div>
    </Container>
  );
}
