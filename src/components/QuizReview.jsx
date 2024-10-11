// import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// const QuizReview = ({
//   questions,
//   userSelections,
//   currentQuestionIndex,
//   onNext,
//   onPrevious,
//   onSubmit,
// }) => {
//   const currentQuestion = questions[currentQuestionIndex];
//   const navigate = useNavigate();

//   const handleBackToHome = () => {
//     navigate("/");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
//       <div className=" bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mt-20 ">
//         {/* Review Question */}
//         <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200 shadow-sm">
//           <h1 className="text-2xl font-bold text-black text-center">
//             {currentQuestion.question}
//           </h1>
//         </div>
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           {currentQuestion.options.map((option) => {
//             const isSelected = userSelections[currentQuestion.id] === option;
//             const isCorrect = currentQuestion.answer === option;

//             return (
//               <button
//                 key={option}
//                 className={`py-4 px-6 text-left border rounded-lg shadow-sm ${
//                   isCorrect && isSelected
//                     ? "bg-green-200"
//                     : !isCorrect && isSelected
//                     ? "bg-red-200"
//                     : isCorrect // Highlight correct answer in green
//                     ? "bg-green-100"
//                     : ""
//                 }`}
//                 disabled
//               >
//                 {option}
//                 {isCorrect && !isSelected && ( // Added indicator for the correct answer
//                   <span className="text-green-600 ml-2">(Correct Answer)</span>
//                 )}
//               </button>
//             );
//           })}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-8">
//           {/* Previous Button */}
//           <button
//             className="bg-blue-400 text-white py-3 px-6 rounded hover:bg-blue-500 transition-all duration-300"
//             onClick={onPrevious}
//             disabled={currentQuestionIndex === 0}
//           >
//             Previous
//           </button>

//           {/* Next Button */}
//           {currentQuestionIndex < questions.length - 1 && (
//             <button
//               className="bg-blue-400 text-white py-3 px-6 rounded hover:bg-blue-500 transition-all duration-300"
//               onClick={onNext}
//               //disabled={currentQuestionIndex === questions.length - 1}
//             >
//               Next
//             </button>
//           )}
        

//         {/* Submit Button */}
//         {currentQuestionIndex === questions.length - 1 && (
//           <button
//             onClick={handleBackToHome}
//             className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-all duration-300"
//           >
//             OK, Take me Home
//           </button>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizReview;


import React from "react";
import { useNavigate } from "react-router-dom";

const QuizReview = ({
  questions,
  userSelections,
  currentQuestionIndex,
  onNext,
  onPrevious,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mt-10 sm:mt-20">
        {/* Review Question */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200 shadow-sm">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black text-center">
            {currentQuestion.question}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {currentQuestion.options.map((option) => {
            const isSelected = userSelections[currentQuestion.id] === option;
            const isCorrect = currentQuestion.answer === option;

            return (
              <button
                key={option}
                className={`py-3 px-4 text-left border rounded-lg shadow-sm ${
                  isCorrect && isSelected
                    ? "bg-green-200"
                    : !isCorrect && isSelected
                    ? "bg-red-200"
                    : isCorrect
                    ? "bg-green-100"
                    : ""
                }`}
                disabled
              >
                {option}
                {isCorrect && !isSelected && (
                  <span className="text-green-600 ml-2">(Correct Answer)</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {/* Previous Button */}
          <button
            className="bg-blue-400 text-white py-2 px-4 sm:py-3 sm:px-6 rounded hover:bg-blue-500 transition-all duration-300"
            onClick={onPrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>

          {/* Next Button */}
          {currentQuestionIndex < questions.length - 1 && (
            <button
              className="bg-blue-400 text-white py-2 px-4 sm:py-3 sm:px-6 rounded hover:bg-blue-500 transition-all duration-300"
              onClick={onNext}
            >
              Next
            </button>
          )}

          {/* Submit Button */}
          {currentQuestionIndex === questions.length - 1 && (
            <button
              onClick={handleBackToHome}
              className="bg-blue-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded hover:bg-blue-600 transition-all duration-300"
            >
              OK, Take me Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizReview;
