export default function listModel({ title, id, cardId, cardText }) {
  return [
    {
      title: title,
      id: id,
      cards: [
        {
          id: cardId,
          text: cardText,
        },
      ],
    },
  ];
}
