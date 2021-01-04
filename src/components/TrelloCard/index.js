import React from "react";

import { Card, CardContent } from "./style";
import { Draggable } from "react-beautiful-dnd";

export default function TrelloCard({ text, index }) {
  return (
    <Draggable draggableId={`draggable-${index}`} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContent>{text}</CardContent>
        </Card>
      )}
    </Draggable>
  );
}
