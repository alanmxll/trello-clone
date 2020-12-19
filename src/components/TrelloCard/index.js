import React from "react";

import { Card, CardContent } from "./style";

export default function TrelloCard({ text }) {
  return (
    <>
      <Card>
        <CardContent>{text}</CardContent>
      </Card>
    </>
  );
}
