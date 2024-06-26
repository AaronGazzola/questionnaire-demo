const questions = [
  // Scale questions
  {
    id: "1e0b1a57-b8a5-4b67-a1b5-1c47368a33ba",
    text: "How important is good communication in a web developer?",
    type: "scale",
    options: [],
  },
  {
    id: "2f4c4e1b-3aaf-4b6b-8e68-8d4f2e7b0d2a",
    text: "How often do you require updates on project progress?",
    type: "scale",
    options: [],
  },
  {
    id: "3a7b6e7a-6a9c-4c57-8f77-1b6e7d7f2d4c",
    text: "How important is code quality and maintainability to you?",
    type: "scale",
    options: [],
  },
  {
    id: "4c5d7f3a-7a7e-4e9b-8d77-2b6e7f8d9c4f",
    text: "What impact does the developer's portfolio have on your decision to hire?",
    type: "scale",
    options: [],
  },
  {
    id: "5d8f4a7b-8a7d-4b6c-9f68-3b6e7f8d9e5d",
    text: "What value do you place on reducing the development timeline?",
    type: "scale",
    options: [],
  },
  // Multiple-choice questions
  {
    id: "6e9f5a8c-9b7e-4c6d-af78-4b7e8d9e6f6e",
    text: "Which programming languages do you prefer for web development?",
    type: "multiple-choice",
    options: ["JavaScript", "Python", "Ruby", "TypeScript", "PHP"],
  },
  {
    id: "7f1a6b9d-ab8f-4d7e-bf89-5b8e9f7d7a7f",
    text: "Which web development frameworks do you prefer?",
    type: "multiple-choice",
    options: ["React", "Vue", "Angular", "Svelte", "Next.js"],
  },
  {
    id: "8a2b7c1e-bc9f-4e8f-cf9a-6c9e8d8e8b8a",
    text: "Which type of web projects do you usually have?",
    type: "multiple-choice",
    options: ["E-commerce", "Blogs", "Corporate", "Portfolio", "Other"],
  },
  {
    id: "9b3c8d2f-cd8f-4f9f-df9b-7d9e9d8f9c9b",
    text: "How many years of experience do you expect the developer to have?",
    type: "multiple-choice",
    options: ["0-1", "1-3", "3-5", "5-10", "10+"],
  },
  {
    id: "0c4d9e3f-de9f-5f8f-efab-8e9f8e9d0d0a",
    text: "Which design tools do you prefer your developers to use?",
    type: "multiple-choice",
    options: ["Figma", "Sketch", "Adobe XD", "InVision", "Other"],
  },
];

const users = [
  {
    id: "1e3f5a79-b6e2-4f11-b69a-f0ad74e1d8fa",
    name: "John",
    answers: [
      {
        questionId: "1e0b1a57-b8a5-4b67-a1b5-1c47368a33ba",
        answer: "5",
      },
      {
        questionId: "2f4c4e1b-3aaf-4b6b-8e68-8d4f2e7b0d2a",
        answer: "4",
      },
      {
        questionId: "3a7b6e7a-6a9c-4c57-8f77-1b6e7d7f2d4c",
        answer: "3",
      },
      {
        questionId: "4c5d7f3a-7a7e-4e9b-8d77-2b6e7f8d9c4f",
        answer: "4",
      },
      {
        questionId: "5d8f4a7b-8a7d-4b6c-9f68-3b6e7f8d9e5d",
        answer: "5",
      },
      {
        questionId: "6e9f5a8c-9b7e-4c6d-af78-4b7e8d9e6f6e",
        answer: "JavaScript",
      },
      {
        questionId: "7f1a6b9d-ab8f-4d7e-bf89-5b8e9f7d7a7f",
        answer: "React",
      },
      {
        questionId: "8a2b7c1e-bc9f-4e8f-cf9a-6c9e8d8e8b8a",
        answer: "E-commerce",
      },
      {
        questionId: "9b3c8d2f-cd8f-4f9f-df9b-7d9e9d8f9c9b",
        answer: "3-5",
      },
      {
        questionId: "0c4d9e3f-de9f-5f8f-efab-8e9f8e9d0d0a",
        answer: "Figma",
      },
    ],
  },
  {
    id: "2a7e9d79-c8e4-4d62-8c69-d6c5d5c5a4b2",
    name: "Jane",
    answers: [
      {
        questionId: "1e0b1a57-b8a5-4b67-a1b5-1c47368a33ba",
        answer: "4",
      },
      {
        questionId: "2f4c4e1b-3aaf-4b6b-8e68-8d4f2e7b0d2a",
        answer: "3",
      },
      {
        questionId: "3a7b6e7a-6a9c-4c57-8f77-1b6e7d7f2d4c",
        answer: "4",
      },
      {
        questionId: "4c5d7f3a-7a7e-4e9b-8d77-2b6e7f8d9c4f",
        answer: "3",
      },
      {
        questionId: "5d8f4a7b-8a7d-4b6c-9f68-3b6e7f8d9e5d",
        answer: "4",
      },
      {
        questionId: "6e9f5a8c-9b7e-4c6d-af78-4b7e8d9e6f6e",
        answer: "Python",
      },
      {
        questionId: "7f1a6b9d-ab8f-4d7e-bf89-5b8e9f7d7a7f",
        answer: "Vue",
      },
      {
        questionId: "8a2b7c1e-bc9f-4e8f-cf9a-6c9e8d8e8b8a",
        answer: "Corporate",
      },
      {
        questionId: "9b3c8d2f-cd8f-4f9f-df9b-7d9e9d8f9c9b",
        answer: "1-3",
      },
      {
        questionId: "0c4d9e3f-de9f-5f8f-efab-8e9f8e9d0d0a",
        answer: "Sketch",
      },
    ],
  },
  {
    id: "3c8e1d6b-d5f6-4f29-9b7d-f8a7e9d1e5f6",
    name: "Bill",
    answers: [
      {
        questionId: "1e0b1a57-b8a5-4b67-a1b5-1c47368a33ba",
        answer: "3",
      },
      {
        questionId: "2f4c4e1b-3aaf-4b6b-8e68-8d4f2e7b0d2a",
        answer: "2",
      },
      {
        questionId: "3a7b6e7a-6a9c-4c57-8f77-1b6e7d7f2d4c",
        answer: "4",
      },
      {
        questionId: "4c5d7f3a-7a7e-4e9b-8d77-2b6e7f8d9c4f",
        answer: "4",
      },
      {
        questionId: "5d8f4a7b-8a7d-4b6c-9f68-3b6e7f8d9e5d",
        answer: "3",
      },
      {
        questionId: "6e9f5a8c-9b7e-4c6d-af78-4b7e8d9e6f6e",
        answer: "Ruby",
      },
      {
        questionId: "7f1a6b9d-ab8f-4d7e-bf89-5b8e9f7d7a7f",
        answer: "Angular",
      },
      {
        questionId: "8a2b7c1e-bc9f-4e8f-cf9a-6c9e8d8e8b8a",
        answer: "Blogs",
      },
      {
        questionId: "9b3c8d2f-cd8f-4f9f-df9b-7d9e9d8f9c9b",
        answer: "5-10",
      },
      {
        questionId: "0c4d9e3f-de9f-5f8f-efab-8e9f8e9d0d0a",
        answer: "Adobe XD",
      },
    ],
  },
];

module.exports = {
  questions,
  users,
};
