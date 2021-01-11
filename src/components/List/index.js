import React from "react";

import { MdAdd } from "react-icons/md";
import { GrTemplate } from "react-icons/gr";

import Card from "../Card";

import { Container } from "./styles";

function List({ data, index: listIndex }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>

      <div className="action-buttons">
        <button className="add-card-button">
          <MdAdd size={20} />
          <p>Add another card</p>
        </button>
        <button
          className="create-from-template"
          title="Create from template..."
        >
          <GrTemplate />
        </button>
      </div>
    </Container>
  );
}

export default List;