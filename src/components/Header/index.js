import React from "react";

import { Container } from "./styles";

import { CgMenuGridO, CgHome } from "react-icons/cg";
import { SiTrello } from "react-icons/si";

import TrelloLogo from "../../assets/images/trello-logo.png";

export default function Header() {
  return (
    <Container>
      <div className="menu-buttons">
        <div className="button">
          <CgMenuGridO size={20} color={"fff"} />
        </div>
        <div className="button">
          <CgHome size={20} color={"fff"} />
        </div>
        <div className="button">
          <SiTrello size={20} color={"fff"} />
          <p>Boards</p>
        </div>
      </div>
      <img src={TrelloLogo} alt="logo" height={30} />
      <div className="setting-buttons"></div>
    </Container>
  );
}
