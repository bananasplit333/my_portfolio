import React, { useState } from 'react';
import Link from 'next/link';

interface FlashcardsCardProps {
  questions: string[];
}

const FlashcardsCard: React.FC<FlashcardsCardProps> = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Flashcards</h2>
        <Link href="/flashcard-generator">
          <a className="text-blue-500 hover:underline">Back to Flashcard Generator</a>
        </Link>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 mb-4">
        <p className="text-lg">{currentQuestion}</p>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <span className="text-gray-600">
          {currentQuestionIndex + 1} / {questions.length}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FlashcardsCard;