import React, { useState } from "react";

import { MdAdd, MdClose } from "react-icons/md";
import { GrTemplate } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

import Card from "../Card";

import { Container } from "./styles";
import useStyles from "./makeStyles";

import Popover from "@material-ui/core/Popover";

function List({ data, index: listIndex }) {
  const [addCardWasClicked, setAddCardWasClicked] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

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
        <div className="header-options">
          <BsThreeDots size={18} color={"727e91"} />
        </div>
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
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            <GrTemplate />
          </button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <div className={classes.modalContent}>
              <div className={classes.header}>
                <p className={classes.title}>Card templates</p>
                <MdClose
                  className={classes.close}
                  size={20}
                  color={"727e91"}
                  cursor={"pointer"}
                  onClick={handleClose}
                />
              </div>
              <hr />
              <p className={classes.paragraph}>
                You don’t have any templates. Create a template to make copying
                cards easy.
              </p>
              <button className={classes.button}>Create a New Template</button>
            </div>
          </Popover>
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
