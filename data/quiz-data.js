const quizzes = [
  {
    name: "Figma Basics",
    imageURL:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    questions: [
      {
        question: "Figma is a",
        imageURL:
          "https://images.unsplash.com/photo-1605907126120-f68611516ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "Game Engine",
            isRight: false,
          },
          {
            option: "Web based design software",
            isRight: true,
          },
          {
            option: "Video Editor",
            isRight: false,
          },
          {
            option: "3d modelling software",
            isRight: false,
          },
        ],
      },
      {
        question: "Figma is used for",
        imageURL:
          "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "UX Design",
            isRight: false,
          },
          {
            option: "Brainstorming",
            isRight: false,
          },
          {
            option: "Prototyping",
            isRight: false,
          },
          {
            option: "All of the above",
            isRight: true,
          },
        ],
      },
      {
        question: "The shortcut to create a new frame in figma is",
        imageURL:
          "https://images.unsplash.com/photo-1571907483083-af70aeda3285?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "F",
            isRight: true,
          },
          {
            option: "Ctrl + F",
            isRight: false,
          },
          {
            option: "Alt + Shift + F",
            isRight: false,
          },
          {
            option: "A",
            isRight: false,
          },
        ],
      },
      {
        question: "Who is the founder of Figma",
        imageURL:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "Evan Spiegel",
            isRight: false,
          },
          {
            option: "Dylan Field",
            isRight: true,
          },
          {
            option: "Mark Zuckerberg",
            isRight: false,
          },
          {
            option: "Kevin Systrom",
            isRight: false,
          },
        ],
      },
      {
        question: "Which feature in figma is used to create fluid components",
        imageURL:
          "https://images.unsplash.com/photo-1606161290889-77950cfb67d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "Figjam",
            isRight: false,
          },
          {
            option: "Variants",
            isRight: false,
          },
          {
            option: "Auto Layout",
            isRight: true,
          },
        ],
      },
    ],
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1576595580361-90a855b84b20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
    name: "UX Design",
    questions: [
      {
        question: "UX stands for",
        imageURL:
          "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "User Exchange",
            isRight: false,
          },
          {
            option: "User Expression",
            isRight: false,
          },
          {
            option: "User Interface",
            isRight: false,
          },
          {
            option: "User Experience",
            isRight: true,
          },
        ],
      },
      {
        question:
          "The process of identifying major competitors and researching their products, sales, and marketing strategies is called",
        imageURL:
          "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "Spying",
            isRight: false,
          },
          {
            option: "Competitive Analysis",
            isRight: true,
          },
          {
            option: "Espionage",
            isRight: false,
          },
          {
            option: "Collaboration",
            isRight: false,
          },
        ],
      },
      {
        question:
          "__________ is a method design teams use to generate ideas to solve clearly defined design problems",
        imageURL:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "Storyboarding",
            isRight: false,
          },
          {
            option: "Moodboarding",
            isRight: false,
          },
          {
            option: "Brainstorming",
            isRight: true,
          },
          {
            option: "Ideation",
            isRight: false,
          },
        ],
      },
      {
        question:
          "The point at which the finished designs are handed for development to developers is called",
        imageURL:
          "https://images.unsplash.com/photo-1563097013-a1df1d1fd1c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        options: [
          {
            option: "Implementation Phase",
            isRight: false,
          },
          {
            option: "Design Passing",
            isRight: false,
          },
          {
            option: "Developer Handoff",
            isRight: true,
          },
          {
            option: "Design Mocking",
            isRight: false,
          },
        ],
      },
    ],
  },
];

module.exports = { quizzes };