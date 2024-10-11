// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import QuizReview from "./QuizReview"; // Import the new QuizReview component

// const questions = [
//   {
//     id: 1,
//     question: "What does HTML stand for?",
//     options: [
//       "HyperText Markup Language",
//       "HighText Markup Language",
//       "Hyperlink and Text Markup Language",
//       "None of the above",
//     ],
//     answer: "HyperText Markup Language",
//   },
//   {
//     id: 2,
//     question: "What property is used to change the text color in CSS?",
//     options: ["background-color", "color", "text-color", "font-color"],
//     answer: "color",
//   },
//   {
//     id: 3,
//     question: "Which method parses a JSON string in JavaScript?",
//     options: [
//       "JSON.stringify()",
//       "JSON.parse()",
//       "JSON.object()",
//       "JSON.convert()",
//     ],
//     answer: "JSON.parse()",
//   },
//   {
//     id: 4,
//     question: "What hook manages state in React functional components?",
//     options: ["useEffect", "useState", "useReducer", "useContext"],
//     answer: "useState",
//   },
//   {
//     id: 5,
//     question: "What is a document in MongoDB?",
//     options: ["Table", "Record", "JSON", "Array"],
//     answer: "JSON",
//   },
//   {
//     id: 6,
//     question: "Which command inserts a document in MongoDB?",
//     options: [
//       "db.collection.insert()",
//       "db.collection.add()",
//       "db.collection.insertOne()",
//       "db.collection.create()",
//     ],
//     answer: "db.collection.insertOne()",
//   },
//   {
//     id: 7,
//     question: "Which CSS property controls the text size?",
//     options: ["font-size", "text-size", "font-style", "text-style"],
//     answer: "font-size",
//   },
//   {
//     id: 8,
//     question: "What keyword is used to declare a variable in JavaScript?",
//     options: ["var", "let", "const", "All of the above"],
//     answer: "All of the above",
//   },
//   {
//     id: 9,
//     question:
//       "Which CSS selector is used to select elements with a specific class?",
//     options: [".classname", "#idname", "elementname", "classname"],
//     answer: ".classname",
//   },
//   {
//     id: 10,
//     question: "What does the 'this' keyword refer to in JavaScript?",
//     options: [
//       "Global object",
//       "Current object",
//       "Function context",
//       "All of the above",
//     ],
//     answer: "Current object",
//   },
//   // Add more questions here...
// ];

// const Quiz = () => {
//   const location = useLocation();
//   const { userAnswers } = location.state || {};
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userSelections, setUserSelections] = useState(userAnswers || {});
//   const [timeLeft, setTimeLeft] = useState(600); // 600 seconds for 10 minutes
//   const navigate = useNavigate();
//   const isReviewing = !!userAnswers; // Check if in review mode

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     if (timeLeft === 0) {
//       handleSubmit();
//     }

//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleAnswerSelection = (selectedAnswer) => {
//     if (!isReviewing) {
//       setUserSelections((prev) => ({
//         ...prev,
//         [questions[currentQuestionIndex].id]: selectedAnswer,
//       }));
//     }
//   };

//   const handleSubmit = () => {
//     const score = questions.reduce(
//       (acc, question) =>
//         acc + (userSelections[question.id] === question.answer ? 1 : 0),
//       0
//     );
//     navigate("/result", {
//       state: {
//         userAnswers: userSelections,
//         score,
//         totalQuestions: questions.length,
//       },
//     });
//   };

//   const handleNext = () => {
//     setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1));
//   };

//   const handlePrevious = () => {
//     setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
//   };

//   // Render the QuizReview component if in review mode
//   if (isReviewing) {
//     return (
//       <QuizReview
//         questions={questions}
//         userSelections={userSelections}
//         currentQuestionIndex={currentQuestionIndex}
//         onNext={handleNext}
//         onPrevious={handlePrevious}
//         onSubmit={handleSubmit}
//       />
//     );
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
//       {/* Timer */}
//       <div className="fixed top-0 left-0 right-0 bg-[#5072A7] text-white py-3 text-center shadow-md">
//         <p className="text-lg font-semibold">
//           Time Left: {Math.floor(timeLeft / 60)}:
//           {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
//         </p>
//       </div>

//       {/* Quiz Container */}
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mt-20">
//         {/* Question Box */}
//         <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200 shadow-sm">
//           <h1 className="text-2xl font-bold text-black text-center">
//             {questions[currentQuestionIndex].question}
//           </h1>
//         </div>

//         {/* Options Layout */}
//         <div className="grid grid-cols-2 gap-6 mb-8">
//           {questions[currentQuestionIndex].options.map((option) => {
//             const isSelected =
//               userSelections[questions[currentQuestionIndex].id] === option;

//             return (
//               <button
//                 key={option}
//                 onClick={() => handleAnswerSelection(option)}
//                 className={`py-4 px-6 text-left border rounded-lg shadow-sm hover:bg-blue-100 transition-all duration-300 text-lg ${
//                   isSelected ? "bg-blue-300 text-white" : "bg-white text-black"
//                 }`}
//               >
//                 {option}
//               </button>
//             );
//           })}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-8">
//           {/* Previous Button */}
//           <button
//             className="bg-blue-400 text-white py-3 px-6 rounded hover:bg-blue-500 transition-all duration-300"
//             onClick={() =>
//               setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
//             }
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </button>

//           {/* Next Button */}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="bg-blue-400 text-white py-3 px-6 rounded hover:bg-blue-500 transition-all duration-300"
//               onClick={() =>
//                 setCurrentQuestionIndex((prev) =>
//                   Math.min(questions.length - 1, prev + 1)
//                 )
//               }
//               // disabled={currentQuestionIndex === questions.length - 1}
//             >
//               Next
//             </button>
//           )}
//         </div>

//         {/* Submit Button */}
//         {currentQuestionIndex === questions.length - 1 && (
//           <button
//             className="w-full bg-blue-500 text-white py-3 rounded mt-6 hover:bg-blue-600 transition-all duration-300"
//             onClick={handleSubmit}
//           >
//             Submit
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Quiz;


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import QuizReview from "./QuizReview"; // Import the new QuizReview component

const questions = [
    {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Markup Language",
      "Hyperlink and Text Markup Language",
      "None of the above",
    ],
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
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.object()",
      "JSON.convert()",
    ],
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
    options: [
      "db.collection.insert()",
      "db.collection.add()",
      "db.collection.insertOne()",
      "db.collection.create()",
    ],
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
    question:
      "Which CSS selector is used to select elements with a specific class?",
    options: [".classname", "#idname", "elementname", "classname"],
    answer: ".classname",
  },
  {
    id: 10,
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "Global object",
      "Current object",
      "Function context",
      "All of the above",
    ],
    answer: "Current object",
  },

  // Your questions here...
];

const Quiz = () => {
  const location = useLocation();
  const { userAnswers } = location.state || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelections, setUserSelections] = useState(userAnswers || {});
  const [timeLeft, setTimeLeft] = useState(600); // 600 seconds for 10 minutes
  const navigate = useNavigate();
  const isReviewing = !!userAnswers; // Check if in review mode

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      handleSubmit();
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerSelection = (selectedAnswer) => {
    if (!isReviewing) {
      setUserSelections((prev) => ({
        ...prev,
        [questions[currentQuestionIndex].id]: selectedAnswer,
      }));
    }
  };

  const handleSubmit = () => {
    const score = questions.reduce(
      (acc, question) =>
        acc + (userSelections[question.id] === question.answer ? 1 : 0),
      0
    );
    navigate("/result", {
      state: {
        userAnswers: userSelections,
        score,
        totalQuestions: questions.length,
      },
    });
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1));
  };

  // Render the QuizReview component if in review mode
  if (isReviewing) {
    return (
      <QuizReview
        questions={questions}
        userSelections={userSelections}
        currentQuestionIndex={currentQuestionIndex}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 px-4 md:px-8">
      {/* Timer */}
      <div className="fixed top-0 left-0 right-0 bg-[#5072A7] text-white py-2 text-center shadow-md">
        <p className="text-base md:text-lg font-semibold">
          Time Left: {Math.floor(timeLeft / 60)}:
          {timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </p>
      </div>

      {/* Quiz Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full max-w-full md:max-w-3xl mt-16">
        {/* Question Box */}
        <div className="bg-blue-50 rounded-lg p-4 md:p-6 mb-6 border border-blue-200 shadow-sm">
          <h1 className="text-xl md:text-2xl font-bold text-black text-center">
            {questions[currentQuestionIndex].question}
          </h1>
        </div>

        {/* Options Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
          {questions[currentQuestionIndex].options.map((option) => {
            const isSelected =
              userSelections[questions[currentQuestionIndex].id] === option;

            return (
              <button
                key={option}
                onClick={() => handleAnswerSelection(option)}
                className={`py-3 px-4 text-left border rounded-lg shadow-sm hover:bg-blue-100 transition-all duration-300 text-base md:text-lg ${
                  isSelected ? "bg-blue-300 text-white" : "bg-white text-black"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {/* Previous Button */}
          <button
            className="bg-blue-400 text-white py-2 px-4 md:py-3 md:px-6 rounded hover:bg-blue-500 transition-all duration-300"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          {/* Next Button */}
          {currentQuestionIndex < questions.length - 1 && (
            <button
              className="bg-blue-400 text-white py-2 px-4 md:py-3 md:px-6 rounded hover:bg-blue-500 transition-all duration-300"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>

        {/* Submit Button */}
        {currentQuestionIndex === questions.length - 1 && (
          <button
            className="w-full bg-blue-500 text-white py-3 rounded mt-6 hover:bg-blue-600 transition-all duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
