import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Review = () => {
  const location = useLocation();
  const { userAnswers, questions } = location.state || {};
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-2xl font-bold">Review Your Answers</h1>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl mt-5">
        {questions.map((question) => (
          <div key={question.id} className="mb-4">
            <h2 className="font-semibold">{question.question}</h2>
            <div className="flex flex-col">
              {question.options.map((option) => (
                <label key={option} className={`cursor-pointer p-2 border rounded ${
                  userAnswers[question.id] === option
                    ? (option === question.answer ? 'bg-green-200' : 'bg-red-200')
                    : (option === question.answer ? 'bg-green-200' : '')
                }`}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    disabled // Disable radio buttons in review mode
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
          onClick={() => navigate('/quiz')}
        >
          Go Back to Quiz
        </button>
      </div>
    </div>
  );
};

export default Review;
