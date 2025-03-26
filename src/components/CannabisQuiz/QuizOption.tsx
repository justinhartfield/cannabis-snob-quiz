
import React from 'react';
import { QuizOption as QuizOptionType } from './quizData';

interface QuizOptionProps {
  option: QuizOptionType;
  onSelect: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, onSelect }) => {
  return (
    <button 
      className="quiz-option w-full text-left" 
      onClick={onSelect}
    >
      <div className="w-full break-words">
        {option.text}
      </div>
    </button>
  );
};

export default QuizOption;
