export function loadLists() {
  return [
    {
      title: "To Do",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Study NodeJS module",
          labels: ["#3dc050"],
          user: "AM",
        },
        {
          id: 2,
          content: "Recreate the Pipefy interface",
          labels: ["#3dc050"],
          user: "AM",
        },
        {
          id: 3,
          content: "Study React Native module",
          labels: ["#3dc050"],
          user: "AM",
        },
        {
          id: 4,
          content:
            'Studying "NextJS: Using server-side rendering with ReactJS"',
          labels: ["#c3d71d"],
          user: "AM",
        },
        {
          id: 5,
          content: "ReactJS tests and deploy",
          labels: ["#c3d71d"],
          user: "AM",
        },
      ],
    },
    {
      title: "Doing",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Studying the Drag and Drop functionality",
          labels: [],
          user: "AM",
        },
      ],
    },
    {
      title: "Paused",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "Study Geolocation and Maps with React Native",
          labels: ["#3dc050"],
          user: "AM",
        },
        {
          id: 8,
          content: "Studying about Context API",
          labels: ["#c3d71d"],
          user: "AM",
        },
        {
          id: 9,
          content: "Adjusts on unform library",
          labels: [],
        },
      ],
    },
    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Studying about deploy and CI with React Native",
          labels: [],
        },
        {
          id: 12,
          content: "Get deeper into ReactJS",
          labels: ["#c3d71d"],
        },
        {
          id: 13,
          content:
            'Learn about "Internationalization of Node.js, ReactJS and React Native applications"',
          labels: ["#3dc050"],
        },
      ],
    },
  ];
}
