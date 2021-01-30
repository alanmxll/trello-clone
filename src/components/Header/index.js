import React from "react";

import { Container } from "./styles";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { CgMenuGridO, CgHome } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
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
        <div className="textarea">
          <textarea rows={1} />
          <FaSearch size={20} color={"fff"} />
        </div>
      </div>
      <img src={TrelloLogo} alt="logo" height={30} />
      <div className="menu-buttons">
        <div className="button">
          <MdAdd size={20} color={"fff"} />
        </div>
        <div className="button">
          <AiOutlineInfoCircle size={20} color={"fff"} />
        </div>
        <div className="button">
          <BiBell size={20} color={"fff"} />
        </div>
        <div className="image">AM</div>
      </div>
    </Container>
  );
}
