import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { userAnswers, score, totalQuestions } = location.state || {};
  
  const questions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HighText Markup Language", "Hyperlink and Text Markup Language", "None of the above"],
        answer: "HyperText Markup Language",
      },
      {
        id: 2,
        question: "What property is used to change the text color in CSS?",
        options: ["background-color", "color", "text-color", "font-color"],
        answer: "color",
      },
      {
        id: 3,
        question: "Which method parses a JSON string in JavaScript?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
        answer: "JSON.parse()",
      },
      {
        id: 4,
        question: "What hook manages state in React functional components?",
        options: ["useEffect", "useState", "useReducer", "useContext"],
        answer: "useState",
      },
      {
        id: 5,
        question: "What is a document in MongoDB?",
        options: ["Table", "Record", "JSON", "Array"],
        answer: "JSON",
      },
      {
        id: 6,
        question: "Which command inserts a document in MongoDB?",
        options: ["db.collection.insert()", "db.collection.add()", "db.collection.insertOne()", "db.collection.create()"],
        answer: "db.collection.insertOne()",
      },
      {
        id: 7,
        question: "Which CSS property controls the text size?",
        options: ["font-size", "text-size", "font-style", "text-style"],
        answer: "font-size",
      },
      {
        id: 8,
        question: "What keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
      },
      {
        id: 9,
        question: "Which CSS selector is used to select elements with a specific class?",
        options: [".classname", "#idname", "elementname", "classname"],
        answer: ".classname",
      },
      {
        id: 10,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: ["Global object", "Current object", "Function context", "All of the above"],
        answer: "Current object",
      }
          // Add more questions as needed to match the quiz
  ];

  const correctAnswersCount = questions.reduce((count, question) => {
    return count + (userAnswers[question.id] === question.answer ? 1 : 0);
  }, 0);

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleReviewAnswers = () => {
    if (userAnswers) {
      navigate('/quiz', { state: { userAnswers, score, totalQuestions } });
    } else {
      console.error("userAnswers is undefined");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      {/* Result Container */}
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl text-center mt-7">
        {/* Celebration Icon */}
        <div className="text-6xl mb-4">🎉</div>

        {/* Congratulation Message */}
        <h1 className="text-4xl font-bold text-black mb-4">Congratulations!</h1>
        <p className="text-xl text-gray-700 mb-6">You have completed the quiz.</p>

        {/* Score Display */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 shadow-sm">
          <p className="text-2xl font-bold text-[#5072A7]">
            Your Score: <span className="text-black">{score}</span> / {totalQuestions}
          </p>
          <p className="mt-2">You got {correctAnswersCount} out of {questions.length} correct!</p>
        </div>

        {/* Encouragement Text */}
        <p className="text-lg text-gray-600 mb-10">
          Keep up the great work! There's always more to learn and explore.
        </p>

        {/* Review Button */}
{/* Button Container */}
<div className="flex space-x-4 mt-4 items-center justify-center"> {/* Added space-x-4 for horizontal space */}
  {/* Review Button */}
  <button
    onClick={handleReviewAnswers}
    className="bg-blue-400 text-white py-3 px-6 rounded hover:bg-blue-500 transition-all duration-300"
  >
    Review Answers
  </button>

  {/* Back to Home Button */}
  <button
    onClick={handleBackToHome}
    className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-all duration-300"
  >
    OK, Take me Home
  </button>
</div>
      </div>
    </div>
  );
};

export default Result;
