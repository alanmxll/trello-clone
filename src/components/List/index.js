import React, { useState } from "react";

import { MdAdd, MdClose } from "react-icons/md";
import { GrTemplate } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

import Card from "../Card";

import { Container } from "./styles";

function List({ data, index: listIndex }) {
  const [addCardWasClicked, setAddCardWasClicked] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  function onHandleClickAddCard() {
    setAddCardWasClicked(!addCardWasClicked);
  }

  function onHandleTextAreaValue({ event }) {
    setTextAreaValue(event.target.value);
  }

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

      {!addCardWasClicked && (
        <div className="action-buttons">
          <button className="add-card-button" onClick={onHandleClickAddCard}>
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
      )}

      {addCardWasClicked && (
        <div className="textarea">
          <textarea
            placeholder={"Enter a title for this card..."}
            onChange={(event) => onHandleTextAreaValue({ event })}
          />
          <div className="actions">
            <div className="actions-divider">
              <button
                className="add-card"
                onClick={() => {
                  // TODO: function to Add Card
                  console.log(textAreaValue);
                  onHandleClickAddCard();
                }}
              >
                Add Card
              </button>
              <button className="cancel" onClick={onHandleClickAddCard}>
                <MdClose size={24} color={"727e91"} />
              </button>
            </div>
            <div className="options">
              <BsThreeDots size={20} color={"727e91"} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default List;
