
import React, { useState } from 'react';
import { quizQuestions, quizResults, QuizResult as QuizResultType } from './quizData';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import ShareOnSocial from './ShareOnSocial';

enum QuizState {
  QUESTION,
  RESULT
}

const CannabisQuiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.QUESTION);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
  }[]>([]);
  
  const handleAnswer = (questionId: string, selectedOptionId: string, isCorrect: boolean) => {
    const newAnswers = [...answers, { questionId, selectedOptionId, isCorrect }];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState(QuizState.RESULT);
    }
  };
  
  const handleRestart = () => {
    setQuizState(QuizState.QUESTION);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };
  
  const score = answers.filter(answer => answer.isCorrect).length;
  
  const getResult = (): QuizResultType => {
    return quizResults.find(
      result => score >= result.scoreRange[0] && score <= result.scoreRange[1]
    ) || quizResults[0];
  };
  
  const renderContent = () => {
    switch (quizState) {
      case QuizState.QUESTION:
        return (
          <div>
            {/* Question counter text */}
            <div className="text-center mb-2 text-sm font-medium text-quiz-secondary">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </div>
            <div className="quiz-progress-bar mb-6">
              <div 
                className="quiz-progress-bar-fill" 
                style={{ 
                  width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` 
                }}
              />
            </div>
            <QuizQuestion
              question={quizQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
            <ShareOnSocial 
              currentQuestion={quizQuestions[currentQuestionIndex].question}
              isQuizComplete={false}
            />
          </div>
        );
      case QuizState.RESULT:
        return (
          <QuizResult
            result={getResult()}
            score={score}
            totalQuestions={quizQuestions.length}
            onRestart={handleRestart}
          />
        );
    }
  };
  
  return (
    <div className="quiz-card max-w-xl mx-auto p-6">
      {renderContent()}
    </div>
  );
};

export default CannabisQuiz;
