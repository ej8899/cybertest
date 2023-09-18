// QuizApp.jsx
import React, { useState, useEffect } from 'react';
import quizData from './quizData'; // the quiz data file

import Question from './Question';
import Options from './Options';
import Result from './Result';

function QuizApp() {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Shuffle function to randomize questions
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // Shuffle the quizData array to randomize the questions
    const shuffledQuestions = shuffleArray(quizData);
    // Select the first 10 questions
    const selectedQuestions = shuffledQuestions.slice(0, 10);
    setQuizQuestions(selectedQuestions);
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      {currentQuestionIndex < quizQuestions.length ? (
        <>
          <h2>Question {currentQuestionIndex + 1}:</h2>
          <Question question={quizQuestions[currentQuestionIndex].question} />
          <Options
            options={quizQuestions[currentQuestionIndex].options}
            onAnswerClick={handleAnswerClick}
          />
        </>
      ) : (
        <Result score={score} totalQuestions={quizQuestions.length} />
      )}
    </div>
  );
}

export default QuizApp;
