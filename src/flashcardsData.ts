// Setting up flashcard model and telling it how we want the data to be entered
// Each flashcard must have an id (with type of number), question, and answer (both with type string)

export interface Flashcard {
    id: number;
    term: string;
    definition: string;
  }
  
  // Hardcoding content
  export const flashcards: Flashcard[] = [
    {
      id: 1,
      term: "What is 1+1?",
      answer: "2",
    },
    {
      id: 2,
      question: "What is 2+2?",
      answer: "4",
    },
    {
      id: 3,
      question: "What is 3+3?",
      answer: "6",
    },
  ];
  