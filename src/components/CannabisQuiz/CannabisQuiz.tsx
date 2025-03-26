
import React, { useState } from 'react';
import { quizQuestions, quizResults, QuizResult as QuizResultType } from './quizData';
import QuizIntro from './QuizIntro';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import EmbedCode from './EmbedCode';

enum QuizState {
  INTRO,
  QUESTION,
  RESULT
}

const CannabisQuiz: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.INTRO);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
  }[]>([]);
  
  const handleStart = () => {
    setQuizState(QuizState.QUESTION);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };
  
  const handleAnswer = (questionId: string, selectedOptionId: string, isCorrect: boolean) => {
    const newAnswers = [...answers, { questionId, selectedOptionId, isCorrect }];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState(QuizState.RESULT);
    }
  };
  
  const score = answers.filter(answer => answer.isCorrect).length;
  
  const getResult = (): QuizResultType => {
    return quizResults.find(
      result => score >= result.scoreRange[0] && score <= result.scoreRange[1]
    ) || quizResults[0];
  };
  
  const renderContent = () => {
    switch (quizState) {
      case QuizState.INTRO:
        return <QuizIntro onStart={handleStart} />;
      case QuizState.QUESTION:
        return (
          <div>
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
          </div>
        );
      case QuizState.RESULT:
        return (
          <QuizResult
            result={getResult()}
            score={score}
            totalQuestions={quizQuestions.length}
            onRestart={handleStart}
          />
        );
    }
  };
  
  return (
    <div className="quiz-card max-w-xl mx-auto p-6">
      {renderContent()}
      <EmbedCode />
    </div>
  );
};

export default CannabisQuiz;
