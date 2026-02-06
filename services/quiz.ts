import axios from "axios";

export type QuestionType = {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export const fetchQuestions = async (amount = 5) => {
  const res = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}&type=multiple`
  );
  return res.data.results;
};