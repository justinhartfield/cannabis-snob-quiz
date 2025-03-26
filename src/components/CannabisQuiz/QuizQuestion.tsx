
import React from 'react';
import { QuizQuestion as QuizQuestionType } from './quizData';
import QuizOption from './QuizOption';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (questionId: string, optionId: string, isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-xl sm:text-2xl font-bold text-quiz-primary mb-6 break-words">
        {question.question}
      </h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            option={option}
            onSelect={() => onAnswer(question.id, option.id, option.isCorrect)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
